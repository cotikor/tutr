import 'package:client/student_manager.dart';
import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.teal,
        accentColor: Colors.orange[300]
      ),
      home: Scaffold(
          appBar: AppBar(
            title: Text('Tutr'),
          ),
          body: StudentManager(startingStudent: 'Sally') )
    );
  }
}
