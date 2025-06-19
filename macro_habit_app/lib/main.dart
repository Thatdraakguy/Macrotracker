import 'dart:io';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late WebViewController _controller;

  @override
  void initState() {
    super.initState();

    // Required for Android WebView initialization
    if (Platform.isAndroid) {
      WebView.platform = AndroidWebView();
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Macro Habit App',
      home: Scaffold(
        body: SafeArea(
          child: WebView(
            initialUrl: Uri.dataFromString(
              '',
              mimeType: 'text/html',
            ).toString(),
            javascriptMode: JavascriptMode.unrestricted,
            onWebViewCreated: (controller) {
              _controller = controller;
              _loadLocalHtml();
            },
          ),
        ),
      ),
    );
  }

  void _loadLocalHtml() async {
    final htmlString = await DefaultAssetBundle.of(context).loadString('assets/index.html');
    _controller.loadUrl(Uri.dataFromString(
      htmlString,
      mimeType: 'text/html',
      encoding: Encoding.getByName('utf-8'),
    ).toString());
  }
}
