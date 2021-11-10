const url =
  "https://script.google.com/macros/s/AKfycbw3sMWQOJ5DMNYIH0dAmKeL1NYAEYVt2i9Y-LfpppQk5luTO-oLDUGNLmrLMr-OaBteqg/exec";

$(document).ready(function () {
  let objData = fetch(url)
    .then((res) => res.json())
    .then((results) => {
      return results[0].data;
    });

  const printData = async () => {
    const data = await objData;
    const dTOptions = {
      hour: "numeric",
      minute: "numeric",
    };

    $(function () {
      var dTable = $("#table").DataTable({
        paging: false,
        order: [[4, "desc"]],
        oLanguage: {
          sSearch: "Filter Data",
        },
        data: data,
        columns: [
          {
            data: null,
            render: function (data) {
              return data.Account + "-" + data.Name;
            },
          },
          { data: "Platform" },
          {
            data: "Amount",
            render: DataTable.render.number(",", ".", "2", "$"),
          },
          { data: "Taken_By" },
          {
            data: null,
            render: function (data) {
              return new Date(data.Timestamp).toLocaleTimeString(
                "en-US",
                dTOptions
              );
            },
            visible: true,
          },
          {
            data: null,
            render: function (data) {
              return new Date(data.Timestamp).toLocaleDateString("en-US");
            },
            visible: false,
          },
        ],
      });

      $("#datepicker")
        .datepicker({
          onSelect: function (date) {
            minDateFilter = new Date(date).toLocaleDateString("en-US");
            dTable.draw();
          },
        })
        .keyup(function () {
          minDateFilter = new Date(this.value).toLocaleDateString("en-US");
          dTable.draw();
        });
    });

    // Date range filter
    minDateFilter = "";

    $.fn.dataTableExt.afnFiltering.push(function (
      oSettings,
      aData,
      iDataIndex
    ) {
      if (typeof aData._date == "undefined") {
        aData._date = new Date(aData[5]).toLocaleDateString("en-US");
      }
      if (document.getElementById("datepicker").value == aData._date) {
        return true;
      } else if (minDateFilter == aData._date) {
        return true;
      } else {
        return false;
      }
    });
  };

  printData();
});
