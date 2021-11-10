// // // const searchbyDate = () => {
// // //   var DateArr = [];
// // //   var myTab = document.getElementById("tbody");
// // //   let inputDate = document.getElementById("datepicker").value;
// // //   // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
// // //   for (i = 0; i < myTab.rows.length; i++) {
// // //     // GET THE CELLS COLLECTION OF THE CURRENT ROW.
// // //     var objCells = myTab.rows.item(i).cells;
// // //     var t1 = new Date(objCells.item(5).innerHTML);
// // //     DateArr.push(t1);
// // //   }

// // //   var takenDate = new Date(inputDate);
// // //   takenDate.setHours(0, 0, 0, 0);
// // //   let myTable = document.getElementById("tbody");
// // //   let tr = myTable.getElementsByTagName("tr");
// // //   for (var j = 0; j < DateArr.length; j++) {
// // //     var temp1 = new Date(DateArr[j]);
// // //     if ((takenDate = temp1)) {
// // //       tr[j + 1].style.display = "";
// // //     } else {
// // //       tr[j + 1].style.display = "none";
// // //     }
// // //   }
// // //   //   console.log(inputDate);
// // // };
// // const dinput = document.getElementById("datepicker");

// // dinput.addEventListener("create", (e) => {
// //   console.log(e.target.value);
// // });
// $(function () {
//   var oTable = $("#table").DataTable({
//     oLanguage: {
//       sSearch: "Filter Data",
//     },
//     iDisplayLength: -1,
//     sPaginationType: "full_numbers",
//   });

//   $("#datepicker")
//     .datepicker({
//       onSelect: function (date) {
//         minDateFilter = new Date(date).getTime();
//         oTable.fnDraw();
//       },
//     })
//     .keyup(function () {
//       minDateFilter = new Date(this.value).getTime();
//       oTable.fnDraw();
//     });
// });

// // Date range filter
// minDateFilter = "";
// maxDateFilter = "";

// $.fn.tableExt.afnFiltering.push(function (oSettings, aData, iDataIndex) {
//   if (typeof aData._date == "undefined") {
//     aData._date = new Date(aData[5]).getTime();
//   }

//   if (minDateFilter && !isNaN(minDateFilter)) {
//     if (aData._date < minDateFilter) {
//       return false;
//     }
//   }

//   return true;
// });
