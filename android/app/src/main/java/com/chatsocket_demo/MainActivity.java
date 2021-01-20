package com.chatsocket_demo;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.mnyun.chatsocket.ChatManager;
import com.mnyun.chatsocket.ChatService;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "chatsocket_demo";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
//    Intent serviceIntent = new Intent(this.getApplicationContext(), ChatService.class);
//    this.startService(serviceIntent);
      ChatManager.startChatService(this.getApplicationContext());
  }
}
