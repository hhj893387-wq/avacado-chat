// OneSignal Web SDK initialization
// This script initializes OneSignal for web push notifications

(function() {
  // OneSignal App ID (provided)
  const ONESIGNAL_APP_ID = 'cb60c6c8-6042-4c55-83c5-73973319b011';

  // Initialize OneSignal
  window.OneSignal = window.OneSignal || [];

  OneSignal.push(function() {
    OneSignal.init({
      appId: ONESIGNAL_APP_ID,
      // Your OneSignal app ID
      allowLocalhostAsSecureOrigin: true,
    });
  });

  // Optional: Handle user subscription and event tracking
  OneSignal.push(function() {
    OneSignal.on('subscriptionChange', function(isSubscribed) {
      console.log('OneSignal subscription changed:', isSubscribed);
    });

    OneSignal.on('notificationDisplay', function(event) {
      console.log('OneSignal notification displayed:', event);
    });

    OneSignal.on('click', function(event) {
      event.notification.close();
      console.log('OneSignal notification clicked:', event);
    });

    OneSignal.on('permissionChange', function(permissionGranted) {
      console.log('OneSignal permission changed:', permissionGranted);
    });
  });

  // Optional: Set external user ID when user logs in
  window.setOneSignalUserID = function(userID, email) {
    OneSignal.push(function() {
      OneSignal.setExternalUserId(userID);
      if (email) {
        OneSignal.setEmail(email);
      }
      console.log('OneSignal external user ID set:', userID);
    });
  };

  // Optional: Clear external user ID when user logs out
  window.clearOneSignalUserID = function() {
    OneSignal.push(function() {
      OneSignal.removeExternalUserId();
      console.log('OneSignal external user ID cleared');
    });
  };
})();
