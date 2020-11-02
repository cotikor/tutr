
# Description
  - Tutr is a basic API for a management application for tutors. It allows tutors to manage appointments, students, and session notes. 

# Endpoints
## Appointments
  ### Get All Appointments
  - Returns json data containing an array all of the tutor's upcoming appointments    including:
    - the subject being tutored
    - the date of the appointment
    - student information
    - an array of notes associated with the student

  * **URL**

    `/appointments`

  * **Method:**

    `GET`

  *  **URL Params**

     **Required:**

     None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
          appointments: [
            {
              subject: "generating",
              date: "2/6/2021, 2:43 PM",
              student: {
                name: "Peter Schumm",
                email: "Breanna42@hotmail.com",
                parent_email: "Skye_Ortiz@yahoo.com",
                student_id: 2,
              },
              notes: [
                {
                  note_id: 14,
                  details:
                    "Ipsa non quo eum et quis natus voluptates quas voluptatem necessitatibus pariatur quia voluptatibus deleniti tempora sit consequatur temporibus sint magni esse consectetur soluta id voluptas dolor sint excepturi iure enim et asperiores commodi culpa dolores repellendus autem et rerum assumenda eaque enim et et consequatur voluptas tempora qui deleniti.",
                  updated_at: "11/2/2020, 2:51 PM",
                },
              ],
            },
            {
              subject: "synthesizing",
              date: "11/12/2020, 7:49 PM",
              student: {
                name: "Jessyca Batz",
                email: "Kale.Lesch32@gmail.com",
                parent_email: "Anabel84@yahoo.com",
                student_id: 8,
              },
              notes: [
                {
                  note_id: 12,
                  details:
                    "Dolore iste reiciendis repellat numquam porro sed est ad et aut quaerat corrupti aut quae enim blanditiis dolores dolorem rem architecto dolor dolorem iste soluta at sapiente facere magni et numquam porro eos voluptatem ipsam nihil est ut molestiae ut eum excepturi quis culpa alias rerum qui et dicta expedita.",
                  updated_at: "11/2/2020, 2:51 PM",
                },
                {
                  note_id: 15,
                  details:
                    "Laboriosam eum molestiae distinctio exercitationem dolorum ipsam dolores eos odio occaecati ratione voluptatem aperiam cupiditate praesentium impedit et quis in illo debitis quibusdam quis nostrum repellendus vero et eaque qui nam dolorem ut esse harum sit pariatur ut quis ratione molestiae nihil ad est rerum totam quidem illo in est.",
                  updated_at: "11/2/2020, 2:51 PM",
                },
              ],
            },
          ],
        };
      ```
  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
        axios({
          method: "get",
          url: `${process.env.DB_URL}/appointments`,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
       ```
  ----
   ### Get Appointment By ID
   - Returns json data information about a single appointment including:
      - the subject being tutored
      - the date of the appointment
      - student information
      - an array of notes associated with the student

  * **URL**

    `/appointments/:id`

  * **Method:**

    `GET`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
          "appointment": {
              "subject": "generating",
              "date": "2/6/2021, 2:43 PM",
              "student": {
                  "name": "Peter Schumm",
                  "email": "Breanna42@hotmail.com",
                  "parent_email": "Skye_Ortiz@yahoo.com",
                  "student_id": 2
              },
              "notes": [
                  {
                      "note_id": 14,
                      "details": "Ipsa non quo eum et quis natus voluptates quas voluptatem necessitatibus pariatur quia voluptatibus deleniti tempora sit consequatur temporibus sint magni esse consectetur soluta id voluptas dolor sint excepturi iure enim et asperiores commodi culpa dolores repellendus autem et rerum assumenda eaque enim et et consequatur voluptas tempora qui deleniti.",
                      "updated_at": "11/2/2020, 2:51 PM"
                  },
              ]
          }
        }
    ```
  * **Error Response:**



  * **Sample Call Using Axios:**

     ```javascript
      axios({
        method: "get",
        url: `${process.env.DB_URL}/appointments/1`,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
     ```
    ----
   ### Add a New Appointment
   - Adds a new appointment and returns the id of the created appointment 

  * **URL**

      `/appointments`

  * **Method:**

      `POST`

  *  **URL Params**

     **Required:**

      none

  * **Data Params**

      ```
      {
        student_id=[integer],
        subject=[string],
        date=[ISOString]
      }
      ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
            "newAppointmentID": 21
        }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "POST",
        url: `${process.env.DB_URL}/appointments/1`,
        data: {
          student_id: 5,
          subject: "Calculus",
          date: "2020-11-15T22:35:26.936Z"
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```

   ----
   ### Update Appointment By ID
   - Updates the appointment associated with the given ID and upon success returns an updated count of 1. 

  * **URL**

      `/appointments/:id`

  * **Method:**

      `PUT`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**

      ```
      {
        student_id=[integer],
        subject=[string],
        date=[ISOString]
      }
      ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
      {
          "updatedRecords": 1
      }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "put",
        url: `${process.env.DB_URL}/appointments/1`,
        data: {
          student_id: 2,
          subject: "Geometry",
          date: "2020-11-02T22:35:26.936Z"
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```
     ----
   ### Delete Appointment By ID
   - Delete the appointment associated with the given ID and upon success returns a delete count of 1. 

  * **URL**

      `/appointments/:id`

  * **Method:**

      `DELETE`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**
    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
      {
          "deletedRecords": 1
      }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "delete",
        url: `${process.env.DB_URL}/appointments/1`,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```
----
## Students
  ### Get All Students
   - Returns json data information about a all the tutor's students including:
      - the ID
      - firstname
      - lastname
      - student email
      - parent email

  * **URL**

    `/students`

  * **Method:**

    `GET`

  *  **URL Params**

     **Required:**

     None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
          "students": [
              {
                  "id": 1,
                  "firstname": "Isabell",
                  "lastname": "Borer",
                  "student_email": "Gust80@gmail.com",
                  "parent_email": "Ethan_Strosin45@hotmail.com"
              },
              {
                  "id": 2,
                  "firstname": "Peter",
                  "lastname": "Schumm",
                  "student_email": "Breanna42@hotmail.com",
                  "parent_email": "Skye_Ortiz@yahoo.com"
              },
              {
                  "id": 3,
                  "firstname": "Vicenta",
                  "lastname": "Vandervort",
                  "student_email": "Ford_Johns@hotmail.com",
                  "parent_email": "Destinee72@gmail.com"
              },
              {
                  "id": 4,
                  "firstname": "Gerda",
                  "lastname": "Fadel",
                  "student_email": "Jennie42@yahoo.com",
                  "parent_email": "Rosalinda9@hotmail.com"
              },
              {
                  "id": 5,
                  "firstname": "Jayce",
                  "lastname": "Harris",
                  "student_email": "Ronaldo_Anderson@hotmail.com",
                  "parent_email": "Ernestine29@yahoo.com"
              },
              {
                  "id": 6,
                  "firstname": "Keaton",
                  "lastname": "Rice",
                  "student_email": "Shanie.Bogisich@yahoo.com",
                  "parent_email": "Cletus_Kris@gmail.com"
              },
              {
                  "id": 7,
                  "firstname": "Rhiannon",
                  "lastname": "Stoltenberg",
                  "student_email": "Art_Gutkowski62@hotmail.com",
                  "parent_email": "Henderson_Bartell@gmail.com"
              },
              {
                  "id": 8,
                  "firstname": "Jessyca",
                  "lastname": "Batz",
                  "student_email": "Kale.Lesch32@gmail.com",
                  "parent_email": "Anabel84@yahoo.com"
              },
              {
                  "id": 9,
                  "firstname": "Magdalena",
                  "lastname": "Wolf",
                  "student_email": "Talia98@yahoo.com",
                  "parent_email": "Leda_Trantow84@yahoo.com"
              },
              {
                  "id": 10,
                  "firstname": "Esperanza",
                  "lastname": "Grimes",
                  "student_email": "Emile.King62@hotmail.com",
                  "parent_email": "Noe50@hotmail.com"
              }
          ]
        }
      ```
  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
        axios({
          method: "get",
          url: `${process.env.DB_URL}/students`,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
       ```
  ----
   ### Get Student By ID
   - Returns json data information about a single student including:
      - the ID
      - firstname
      - lastname
      - student email
      - parent email
      - an array of session notes associated with the student
      - an array of upcoming appointments

  * **URL**

    `/students/:id`

  * **Method:**

    `GET`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
          "student": {
              "id": 1,
              "firstname": "Isabell",
              "lastname": "Borer",
              "student_email": "Gust80@gmail.com",
              "parent_email": "Ethan_Strosin45@hotmail.com",
              "notes": [
                  {
                      "note_id": 1,
                      "details": "Deleniti reprehenderit ut sunt sit qui nam voluptatem ratione qui dolores quasi laborum praesentium nemo voluptatibus natus commodi ratione aut id iste ut quasi voluptas incidunt nobis consequatur velit ut laborum illum animi iste fugit itaque qui nisi eum nihil officiis aut provident repudiandae laboriosam adipisci ipsam numquam excepturi nisi.",
                      "updated_at": "11/2/2020, 2:51 PM"
                  },
                  {
                      "note_id": 16,
                      "details": "Veniam sit quo qui ab fugit voluptas voluptatem animi voluptas odit laboriosam vitae dicta rerum asperiores ad fuga magnam in tempore vel atque architecto eum ipsa velit non est omnis qui nemo ea ut alias dolor beatae eos est fugiat et et doloribus totam aut quas voluptatem est et explicabo.",
                      "updated_at": "11/2/2020, 2:51 PM"
                  }, 
              ],
              "upcomingAppointments": [
                  {
                      "subject": "overriding",
                      "date": "9/24/2021, 9:26 AM"
                  },
                  {
                      "subject": "overriding",
                      "date": "4/16/2021, 6:56 PM"
                  },
                  {
                      "subject": "navigating",
                      "date": "3/1/2021, 12:29 PM"
                  }
              ]
         }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

     ```javascript
      axios({
        method: "get",
        url: `${process.env.DB_URL}/students/1`,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
     ```
    ----
   ### Add a New Student
   - Adds a new student and returns the id of the created student 

  * **URL**

      `/students`

  * **Method:**

      `POST`

  *  **URL Params**

     **Required:**

      none

  * **Data Params**

      ```
      {
          firstname = [string],
          lastname = [string],
          student_email = [string],
          parent_email = [string]  
      }
      ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
            "newStudentID": 11
        }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "POST",
        url: `${process.env.DB_URL}/students`,
        data: {
          "firstname": "Jill",
          "lastname": "Smith",
          "student_email": "jillsmith@email.com",
          "parent_email": "joanne.smith@email.com"
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```

   ----
   ### Update Student By ID
   - Updates the student associated with the given ID and upon success returns an updated count of 1. 

  * **URL**

      `/students/:id`

  * **Method:**

      `PUT`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**

      ```
      {
          firstname = [string],
          lastname = [string],
          student_email = [string],
          parent_email = [string]  
      }
      ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
      {
          "updatedRecords": 1
      }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "put",
        url: `${process.env.DB_URL}/notes/1`,
        data: {
          "student_email": "jillsmith1990@email.com"
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```
     ----
   ### Delete Student By ID
   - Delete the student associated with the given ID and upon success returns a delete count of 1. 

  * **URL**

      `/students/:id`

  * **Method:**

      `DELETE`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**
    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
      {
          "deletedRecords": 1
      }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "delete",
        url: `${process.env.DB_URL}/students/1`,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```
----
## Notes
  ### Get All Notes
  - Returns json data containing an array all of the tutor's summary notes including:
    - the ID of the note
    - student information
    - details of the note
    - date the note was last updated

  * **URL**

    `/notes`

  * **Method:**

    `GET`

  *  **URL Params**

     **Required:**

     None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
          "notes": [
              {
                  "id": 1,
                  "student": {
                      "name": "Isabell Borer",
                      "student_id": 1
                  },
                  "details": "Deleniti reprehenderit ut sunt sit qui nam voluptatem ratione qui dolores quasi laborum praesentium nemo voluptatibus natus commodi ratione aut id iste ut quasi voluptas incidunt nobis consequatur velit ut laborum illum animi iste fugit itaque qui nisi eum nihil officiis aut provident repudiandae laboriosam adipisci ipsam numquam excepturi nisi.",
                  "updated_at": "11/2/2020, 2:51 PM"
              },
              {
                  "id": 2,
                  "student": {
                      "name": "Keaton Rice",
                      "student_id": 6
                  },
                  "details": "Ut similique est nulla quo id inventore numquam consequatur modi non a corporis at repudiandae cum doloremque nihil molestias autem vel quod saepe dolores minima et et sunt accusamus qui iusto rem explicabo voluptatem ex pariatur nesciunt natus neque eius in repudiandae est officia temporibus consequatur vero veritatis eius ratione.",
                  "updated_at": "11/2/2020, 2:51 PM"
              },
              {
                  "id": 3,
                  "student": {
                      "name": "Rhiannon Stoltenberg",
                      "student_id": 7
                  },
                  "details": "Accusantium maxime nemo assumenda quia dolores sapiente sint quas ut iure aspernatur cupiditate at non voluptas necessitatibus natus qui quis in nihil sint enim modi voluptatum temporibus sapiente est sint vel amet mollitia et unde debitis magni vel quod suscipit maiores voluptatibus voluptatem modi adipisci qui aperiam totam quod distinctio.",
                  "updated_at": "11/2/2020, 2:51 PM"
              },
              ]
        }
      ```
  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
        axios({
          method: "get",
          url: `${process.env.DB_URL}/notes`,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
       ```
  ----
  ### Get Note By ID
  - Returns json data information about a single note including:
    - the note ID
    - information about the associated student
    - details of the note
    - date the note was last updated

  * **URL**

    `/notes/:id`

  * **Method:**

    `GET`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
          "note": {
              "id": 1,
              "student": {
                  "name": "Isabell Borer",
                  "student_id": 1
              },
              "details": "Deleniti reprehenderit ut sunt sit qui nam voluptatem ratione qui dolores quasi laborum praesentium nemo voluptatibus natus commodi ratione aut id iste ut quasi voluptas incidunt nobis consequatur velit ut laborum illum animi iste fugit itaque qui nisi eum nihil officiis aut provident repudiandae laboriosam adipisci ipsam numquam excepturi nisi.",
              "updated_at": "11/2/2020, 2:51 PM"
          }
        }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

     ```javascript
      axios({
        method: "get",
        url: `${process.env.DB_URL}/notes/1`,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
     ```
    ----
   ### Add a New Note
   - Adds a new note and returns the id of the created note 

  * **URL**

      `/notes`

  * **Method:**

      `POST`

  *  **URL Params**

     **Required:**

      none

  * **Data Params**

      ```
      {
          student_id = [integer],
          details = [string]  
      }
      ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
        {
            "newNoteID": 101
        }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "POST",
        url: `${process.env.DB_URL}/notes`,
        data: {
            "student_id": 5,
            "details": "Student completed homework assignment for limits unit. He struggled to understand the concept at first, but by the end of the session seemed to grasp the material. Should follow up with a review next session."
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```

   ----
   ### Update Note By ID
   - Updates the note associated with the given ID and upon success returns an updated count of 1. 

  * **URL**

      `/notes/:id`

  * **Method:**

      `PUT`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**

      ```
      {
          student_id = [integer],
          details = [string]  
      }
      ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
      {
          "updatedRecords": 1
      }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "put",
        url: `${process.env.DB_URL}/notes/1`,
        data: {
            "details": "Student completed homework assignment for limits unit. He struggled to understand the concept at first, but by the end of the session seemed to grasp the material. Should follow up with a review next session. Also, student should focus on the difference between overall limit vs left limit and right limit"
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```
     ----
   ### Delete Note By ID
   - Delete the note associated with the given ID and upon success returns a delete count of 1. 

  * **URL**

      `/notes/:id`

  * **Method:**

      `DELETE`

  *  **URL Params**

     **Required:**

      `id=[integer]`

  * **Data Params**
    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```
      {
          "deletedRecords": 1
      }
      ```

  * **Error Response:**



  * **Sample Call Using Axios:**

      ```javascript
      axios({
        method: "delete",
        url: `${process.env.DB_URL}/notes/1`,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    ```  
  
