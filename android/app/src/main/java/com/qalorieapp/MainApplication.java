package com.qalorieapp;

import android.app.Application;
import org.reactnative.camera.RNCameraPackage;
import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.spyworldxp.barcodescanner.BarcodeScannerPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.rnfs.RNFSPackage;
import com.imagepicker.ImagePickerPackage;
import com.horcrux.svg.SvgPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.RNFetchBlob.RNFetchBlobPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new VectorIconsPackage(),
            new RNCameraPackage(),
            new BarcodeScannerPackage(),
            new ImageResizerPackage(),
            new RNFSPackage(),
            new ImagePickerPackage(),
            new SvgPackage(),
            new RNViewShotPackage(),
            new RNFetchBlobPackage()
         
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
