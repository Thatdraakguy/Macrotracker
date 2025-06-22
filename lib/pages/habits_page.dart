// lib/pages/habits_page.dart
import 'package:flutter/material.dart';

class HabitsPage extends StatelessWidget {
  const HabitsPage({Key? key}) : super(key: key);

  // This function will be called when the habit is tapped
  void _onHabitClicked(BuildContext context) {
    // For example, show a SnackBar or print something
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Habit clicked!')),
    );
  }

  @override
  Widget build(BuildContext context) {
    // Define the habit details here
    const String habitText = 'Morning routine';
    const Color habitColor = Color(0xFF42A5F5); // Blue-ish hex color

    return Scaffold(
      appBar: AppBar(title: const Text('Your Habit')),
      body: Center(
        child: GestureDetector(
          onTap: () => _onHabitClicked(context),
          child: Container(
            padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 32),
            decoration: BoxDecoration(
              color: habitColor,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(
              habitText,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 20,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
