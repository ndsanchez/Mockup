import Swal from 'sweetalert2'

export default {
    confirmAlert: (message:string,typeMsg:string) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: message,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0BAD6B', 
            cancelButtonColor: '#0B3538',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire({
                type: 'success',  
                title: `${typeMsg}!`,
                text: `Your info has been ${typeMsg}.`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
    },
    successAlert: () =>{
        Swal.fire({
            type: 'success',
            title: 'Completed',
            text:'Your request has been received, check your console',
            showConfirmButton: true,
            confirmButtonColor: '#0BAD6B'
          })
    },
    warningAlert: () =>{
        Swal.fire({
            type: 'warning',
            title: 'Sorry!',
            text:'Every field is required',
            showConfirmButton: true,
            confirmButtonColor: '#0BAD6B'
          })
    }
}