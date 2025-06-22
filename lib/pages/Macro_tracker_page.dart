import 'package:flutter/material.dart';

class MacroTrackerPage extends StatelessWidget {
  const MacroTrackerPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFF2c2c2c),
      appBar: AppBar(
        title: const Text('Macro Tracker'),
        backgroundColor: Color(0xFF1e1e1e),
      ),
      body: const Center(
        child: Text(
          'This is your dashboard content area.',
          style: TextStyle(color: Colors.white),
        ),
      ),
      floatingActionButton: Tooltip(
        message: 'Take photo, calculate macros, track weight, journal your day!',
        child: FloatingActionButton(
          onPressed: () {
            // TODO: Add log action here
          },
          backgroundColor: Color(0xFF4caf50),
          child: const Icon(Icons.edit),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        color: Color(0xFF3a3a3a),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            IconButton(
              icon: Image.asset('assets/images/Onriselogo.png', width: 45),
              onPressed: () {
                Navigator.pushNamed(context, '/habits');
              },
            ),
            IconButton(
              icon: Image.asset('assets/images/goldencarrotblackbg.jpg', width: 45),
              onPressed: () {
                Navigator.pushNamed(context, '/macros');
              },
            ),
            IconButton(
              icon: Image.asset('assets/images/Settingsblackpng.png', width: 45),
              onPressed: () {
                Navigator.pushNamed(context, '/settings');
              },
            ),
          ],
        ),
      ),
    );
  }
}
