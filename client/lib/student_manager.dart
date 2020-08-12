import 'package:client/student_list.dart';
import 'package:flutter/material.dart';

class StudentManager extends StatefulWidget {
  final String startingStudent;

  StudentManager({this.startingStudent});

  @override
  State<StatefulWidget> createState() {
    return _StudentManagerState();
  }
}

class _StudentManagerState extends State<StudentManager> {
  List<String> _students = [];

  @override
  void initState() {
    _students.add(widget.startingStudent);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Container(
        margin: EdgeInsets.all(2.5),
        child: RaisedButton(
          color: Theme.of(context).accentColor,
          child: Text('Add Student'),
          onPressed: () {
            setState(() {
              _students.add('Robert');
            });
          },
        ),
      ),
      StudentList(_students)
    ]);
  }
}
