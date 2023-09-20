import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
   const [data, setData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isAccepted: false,
   });
   const [errors, setErrors] = useState({});
   const [touched, setTouched] = useState({});

   useEffect(() => {
      setErrors(validate(data, 'Login'));
   }, [data, touched]);

   const changeHandler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });
   };

   const focusHandler = (event) => {
      setTouched({ ...touched, [event.target.name]: true });
   };

   const submitHandler = (event) => {
      event.preventDefault();
      if (!Object.keys(errors).length) {
         notify('success');
      } else {
         notify('error');
         setTouched({
            email: true,
            password: true,
         });
      }
   };

   return (
      <div className={styles.container}>
         <form onSubmit={submitHandler} className={styles.formContainer}>
            <h2 className={styles.header}>Login</h2>
            <div className={styles.formField}>
               <label>Email</label>
               <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} className={errors.email && touched.email ? styles.uncompleted : styles.formInput} />
               {errors.email && touched.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.formField}>
               <label>Password</label>
               <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} className={errors.password && touched.password ? styles.uncompleted : styles.formInput} />
               {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.formButtons}>
               <Link to="/signup">Sign Up</Link>
               <button type="submit">Login</button>
            </div>
         </form>
         <ToastContainer />
      </div>
   );
};

export default Login;
