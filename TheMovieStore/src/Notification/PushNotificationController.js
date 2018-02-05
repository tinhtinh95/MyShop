import React, { Component } from "react";
import { Platform } from "react-native";
import FCM, {
  FCMEvent,
  RemoteNotificationResult,
  WillPresentNotificationResult,
  NotificationType
} from "react-native-fcm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as movieAction from "../actions/actions";
import * as MovieHeplers from "../models/MovieHeplers";

class PushNotificationController extends Component {
  constructor(props) {
    super(props);
    console.log("PushNotificationController");
  }

  componentDidMount() {
    FCM.requestPermissions();

    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
    });

    FCM.getInitialNotification().then(notif => {
      console.log("INITIAL NOTIFICATION", notif);
      // remove reminder from db
      if (notif.body != null) {
        MovieHeplers.removeReminder(parseInt(notif.id));
      }
    });

    this.notificationListner = FCM.on(FCMEvent.Notification, notif => {
      console.log("Notification", notif);
      if (notif.local_notification) {
        if (notif.show_in_foreground) {
          return;
        }
      }
      if (notif.opened_from_tray) {
        console.log("Notification opened_from_tray");
        return;
      }

      if (Platform.OS === "ios") {
        switch (notif._notificationType) {
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData); //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
            break;
          case NotificationType.NotificationResponse:
            notif.finish();
            break;
          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All); //other types available: WillPresentNotificationResult.None
            break;
        }
      }

      this.showLocalNotification(notif);
    });

    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
      console.log("TOKEN (refreshUnsubscribe)", token);
    });
  }

  showLocalNotification(notif) {
    // remove reminder from db
    MovieHeplers.removeReminder(parseInt(notif.id));
    let time = new Date().getTime();
    this.props.reloadScreen(`${notif.id}|${time}`);

    console.log("TshowLocalNotification", JSON.stringify(notif));
    let message = "",
      pics = "";
    if (notif.local_notification) {
      let fields = notif.body.split("|");
      message = fields[0];
      pics = fields[1];
    } else {
      message = notif.fcm.body;
      pics = notif.picture;
    }

    FCM.presentLocalNotification({
      title: notif.title,
      body: message,
      //priority: "high",
      click_action: notif.click_action,
      show_in_foreground: true,
      local: true,
      picture: pics
    });
  }

  componentWillUnmount() {
    this.notificationListner.remove();
    this.refreshTokenListener.remove();
  }

  render() {
    return null;
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(movieAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  PushNotificationController
);
