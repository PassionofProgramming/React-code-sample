package com.qalorieapp;

import com.facebook.react.ReactActivity;
// import com.reactnative.ivpusic.imagepicker.PickerPackage;
import org.reactnative.camera.RNCameraPackage;
import android.os.Bundle;
import android.os.Build;
import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;
import android.content.pm.PackageManager;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
      public static final int PERMISSION_REQ_CODE = 1234;
public static final int OVERLAY_PERMISSION_REQ_CODE = 1235;
String[] perms = {"android.permission.READ_EXTERNAL_STORAGE","android.permission.WRITE_EXTERNAL_STORAGE"};

    @Override
    protected String getMainComponentName() {

        return "qalorieapp";
    }

        @Override
    public void onCreate (Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    checkPerms();
    }
   
	    public void checkPerms() {
	    if(Build.VERSION.SDK_INT>Build.VERSION_CODES.LOLLIPOP_MR1) 
	    {
	    if (!Settings.canDrawOverlays(this)) {
	    Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
	    Uri.parse("package:" + getPackageName()));
	    startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
	    }
	    for(String perm : perms){
	    	if(checkSelfPermission(perm) == PackageManager.PERMISSION_DENIED){
	    		requestPermissions(perms, PERMISSION_REQ_CODE);
	    		break;
	    	}
	    }
	}
	}

		@Override
	public void onActivityResult(int requestCode, int resultCode, Intent data) 
	{
		super.onActivityResult(requestCode, resultCode, data);
		if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
			checkPerms();
		}
	}
	@Override
	public void onRequestPermissionsResult(int permsRequestCode, String[] permissions, int[] grantResults){
	switch(permsRequestCode){
	case PERMISSION_REQ_CODE:
	checkPerms();
	break;
	}
	}
}
