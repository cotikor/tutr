
# Description
  - Tutr is a basic API for a management application for tutors. It allows tutors to manage appointments, students, and session notes. 

# Endpoints
## Appointments
  ### Get All Appointments
  - Returns json data containing an array all of the tutor's upcoming appointments    including the subject being tutored, the date of the appointment, and student information.

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
   - Returns json data information about a single appointment including the subject being tutored, the date of the appointment, and student information.

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
        student_id=[integer]
        subject=[string]
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
        student_id=[integer]
        subject=[string]
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
          subject: "Geometry"
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
  
