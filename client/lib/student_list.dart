import 'package:flutter/material.dart';

class StudentList extends StatelessWidget {
  final List<String> students;

  StudentList(this.students);

  @override
  Widget build(BuildContext context) {
    return Column(
        children: students
            .map((student) => Card(
                  child: Column(
                    children: <Widget>[
                      // Image.asset('assets/stock.jpg'),
                      Text(student)
                    ],
                  ),
                ))
            .toList());
  }
}
