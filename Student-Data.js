const ab = async ()=>{
   let Student = await fetch('./Student-Data.json')
   .then(response => {
   return response.json();
   }).then (data => data);  
   console.log(Student[0]);


   let tbody = document.getElementById("tbody");
   let tbody2 = document.getElementById("tbody2");
   let table2 = document.getElementById("table2");
   let SortAZ = document.getElementById("sortAZ");
   let sortZA = document.getElementById("sortZA");
   let sortByMarks = document.getElementById("sortByMarks");
   let sortByPassing = document.getElementById("sortByPassing");
   let sortByClass = document.getElementById("sortByClass");
   let sortByGender = document.getElementById("sortByGender");
   let searchBtn = document.getElementById("searchBtn");

   

   //Search the student
   searchBtn.addEventListener("click", () => {
      console.log("Searching is going on...");
      let searchStudent = document.getElementById("searchStudent").value.toUpperCase();
      let findStudent = Student.filter((person)=>{
         let studentFName = person.first_name.toUpperCase();
         let studentLName = person.last_name.toUpperCase();
         let studentEmail = person.email.toUpperCase();
         if(searchStudent == studentFName || searchStudent == studentLName || searchStudent == studentEmail)
         {
            return person;
         }
      });
      tbody.innerHTML = `<tr></tr>`
      console.log("Search Completed...");
      DataShow(findStudent);
   });


   //show data in application
   DataShow(Student);//function invoking

   function DataShow(Student){
      console.log("DataShow going on...");
      for(let i = 0; i <Student.length; i++){
      let tr = document.createElement("tr");
      let passFail;
      if(Student[i].passing == true){
         passFail="Passed";
      }
      else{
         passFail="Failed";
      }
      
      tr.innerHTML = `<td>${Student[i].id}</td>
                          <td><img src=${Student[i].img_src} alt="profile-pic"> ${Student[i].first_name} ${Student[i].last_name}</td>
                          <td>${Student[i].gender}</td>
                          <td>${Student[i].class}</td>
                          <td>${Student[i].marks}</td>
                          <td>${passFail}</td>
                          <td>${Student[i].email}</td>
                              </td>`;
      tbody.appendChild(tr);
      }
   };


   // Sort Student array By A-Z
      SortAZ.addEventListener("click", () => {
         console.log("A->Z Sorting going on...");
         Student.sort((a,b)=>{
            a = a.first_name.toUpperCase();
            b = b.first_name.toUpperCase();
            if (a<b) {return -1;}
            if (a>b) {return 1;}
            return 0;
         });
         // for(let i = 0; i<Student.length; i++) {
         //    tbody.removeChild(tr);
         // }
         tbody.innerHTML=`<tr></tr>`;
         DataShow(Student);
      });


      // Sort Student array By Z-A
      sortZA.addEventListener("click", () => {
         console.log("Z->A Sorting going on...");
         Student.sort((a,b)=>{
            a = a.first_name.toUpperCase();
            b = b.first_name.toUpperCase();
            if (a>b) {return -1;}
            if (a<b) {return 1;}
            return 0;
         });
         tbody.innerHTML = `<tr></tr>`
         DataShow(Student);
      });
      

      // Sort Student array By Marks
      sortByMarks.addEventListener("click", () => {
         console.log("Marks Sorting going on...");
         Student.sort((a,b)=>a.marks-b.marks);
         tbody.innerHTML = `<tr></tr>`
         DataShow(Student);
      });


      // sort Student array By Passing
      sortByPassing.addEventListener("click", () => {
         console.log("Passing Sorting going on...");
         let FilteredStudent = Student.filter((a)=>a.passing == true);
         console.log(FilteredStudent);

         tbody.innerHTML = `<tr></tr>`
         DataShow(FilteredStudent);
      });

      
      // Sort Student array By Class
      sortByClass.addEventListener("click", () => {
         console.log("Class Sorting going on...");
         Student.sort((a,b)=>a.class-b.class);
         tbody.innerHTML = `<tr></tr>`
         DataShow(Student);
      });


      // sort Student array By Gender
      sortByGender.addEventListener("click", () => {
         console.log("Gender Sorting going on...");
        let gender1 = Student.filter((a)=>a.gender == 'Female');
         tbody.innerHTML = `<tr></tr>`
         DataShow(gender1);


      let gender2 = Student.filter((a)=>a.gender == 'Male');
      table2.style.display = 'table';
      DataShow2(gender2);
         
      });

   function DataShow2(Student){
      console.log("DataShow going on...");
      for(let i = 0; i <Student.length; i++){
      let tr = document.createElement("tr");
      let passFail;
      if(Student[i].passing == true){
         passFail="Passed";
      }
      else{
         passFail="Failed";
      }
      
      tr.innerHTML = `<td>${Student[i].id}</td>
                          <td><img src=${Student[i].img_src} alt="profile-pic"> ${Student[i].first_name} ${Student[i].last_name}</td>
                          <td>${Student[i].gender}</td>
                          <td>${Student[i].class}</td>
                          <td>${Student[i].marks}</td>
                          <td>${passFail}</td>
                          <td>${Student[i].email}</td>
                              </td>`;
      tbody2.appendChild(tr);
      }
   };




























   }
   ab();