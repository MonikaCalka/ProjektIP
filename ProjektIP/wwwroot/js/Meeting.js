﻿function openEditMeetingModal(id) {
    $.ajax({
        type: "GET",
        url: "/Meeting/EditMeeting/",
        data: {Id: id},
        success: function (viewHTML) {
            $('#modal-head').html('<h3>Edytuj wydarzenie</h3>');
            $('#modal-body').html(viewHTML);
            $('#modal-window').modal('show');
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

