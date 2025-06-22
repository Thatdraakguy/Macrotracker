import 'package:flutter/material.dart';

const Set<String> fixedHabits = {
  'Drink water',
  'Exercise',
  'Read book',
  'Meditate',
  'Sleep early',
};

class HabitsPage extends StatelessWidget {
  const HabitsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Your Habits')),
      body: ListView(
        children: fixedHabits
            .map((habit) => ListTile(title: Text(habit)))
            .toList(),
      ),
    );
  }
}
