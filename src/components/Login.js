import { useReducer,useEffect  } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




const initialForm = {
  name: "",
  password: ""
};

const formValidation = yup.object(
  {
    name: yup.string().required(),
    password: yup.number().positive().integer().required()
  }
).required();

function handleInputChange(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "password":
      return { ...state, password: action.value };

    default:
      break;
  }
}




const Login = ({closelogin}) => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: initialForm,
    resolver: yupResolver(formValidation)
  });
  // const [value, setValue] = useState("Initial Value");
  // const [title, setTitle] = useState(value);
  
  const [state, dispatch] = useReducer(handleInputChange, initialForm);

  // function onSubmit(e) {
    // e.preventDefault();
    // setTitle(value);
    // alert(`Form is Submited! Value: ${value}`);
  // }

  const formika = (data) => console.log(data);
  console.log(errors);
  // console.log(state);

 
 
 
 
 
 
 
 

  return (
    <div>
      <div className="loginbg"></div>
    <section className="formcont">
     
      <form onSubmit={handleSubmit(formika)}>
        <div className="logheader">
        <h2>გაიარე ავტორიზაცია</h2>
         <button 
         className="closereg"
         onClick={() => {
          closelogin(false)
        }}
         >&times;</button>
        </div>
        
        
        <label htmlFor="">
          
          <input className="name"
          placeholder="მეილი"
            type="text"
            {...register("name", { required: "This field is required." })}
            // value={state.name}
            // onChange={(e) => dispatch({ type: "name", value: e.target.value })}
          />
          <br/>
          {errors.name && <span>{errors.name?.message}</span>}
        </label>
        <label htmlFor="">
          
          <input className="pasword"
          placeholder="პაროლი"
            type="password"
            {...register("password", {required: ""})}
            // value={state.password}
            // onChange={(e) =>
              // dispatch({ type: "password", value: e.target.value })}
          />
           <br/>
        {errors.password && <span>{errors.password?.message}</span>}
        </label>
        <button className="forgotpsw"
        >დაგავიწყდა პაროლი?</button>
        <button onClick={() => {
        reset({
          firstName: "bill"
        }, {
          keepErrors: true, 
         
        });
      }} 

         className="loginbtn"
         type="submit"> შესვლა</button>
        <div className="orcont">
          <button className="or">ან</button>
        </div>
        <div className="social">
          <button className="fcbk"> Facebook-ით შესვლა</button>
          <button className="ggl">Google-ით შესვლა</button>
        </div>
      </form>
      
    </section>
    </div>
  );
};
export default Login