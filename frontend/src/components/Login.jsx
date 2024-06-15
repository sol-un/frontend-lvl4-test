import { useFormik } from 'formik'

export const Login = () => {
    const formik = useFormik({
        initialValues: {
          userName: "",
          password: "",
        },
        onSubmit: (values) => {
          console.log(JSON.stringify(values, null, 2));
        },
      });

      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="userName">User name</label>
          <input
            id="userName"
            name="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
    
          <button type="submit">Submit</button>
        </form>
      );
};