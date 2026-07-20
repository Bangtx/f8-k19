interface NotificationI {
  send(msg: string): void
}

class SmsNotification implements NotificationI {
  send(msg: string) {
    console.log('send noti via sns')
  }
}

class EmailNotification implements NotificationI {
  send(msg: string) {
    console.log('send noti via email')
  }
}

const sns = new SmsNotification()