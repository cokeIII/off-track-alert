/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.nativescript;

@com.tns.JavaScriptImplementation(
    javaScriptFile = "./tns_modules/nativescript-akylas-bluetooth/android/TNS_LeScanCallback.js")
public class TNS_LeScanCallback extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        android.bluetooth.BluetoothAdapter.LeScanCallback {
  public TNS_LeScanCallback() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onLeScan(android.bluetooth.BluetoothDevice param_0, int param_1, byte[] param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "onLeScan", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
