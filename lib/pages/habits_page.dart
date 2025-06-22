// lib/pages/habits_page.dart
import 'package:flutter/material.dart';

class HabitsPage extends StatelessWidget {
  const HabitsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Habits')),
      body: Center(child: Text('This is the Habits page')),
    );
  }
}
