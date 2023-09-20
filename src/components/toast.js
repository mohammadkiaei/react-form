import { toast } from 'react-toastify';

export const notify = (type) => {
   if (type === 'success') {
      toast.success('You are in !!!', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'dark',
      });
   } else {
      toast.error('Invalid data !', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'dark',
      });
   }
};
