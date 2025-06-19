import 'package:flutter/material.dart';
import 'pages/habits_page.dart';
import 'pages/macro_tracker_page.dart';
import 'pages/settings_page.dart';

void main() => runApp(const MacroTrackerApp());

class MacroTrackerApp extends StatelessWidget {
  const MacroTrackerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Macro Tracker',
      theme: ThemeData.dark(),
      debugShowCheckedModeBanner: false,
      initialRoute: '/macros',  // Start here
      routes: {
        '/macros': (context) => const MacroTrackerPage(),
        '/habits': (context) => const HabitsPage(),
        '/settings': (context) => const SettingsPage(),
      },
    );
  }
}
