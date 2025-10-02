import { useRef } from "react";

const UnControlled = () => {
  const nameRef = useRef();

  const handleSubmite = (e) => {
    e.preventDefault();
    alert("Name: " + nameRef.current.value);
    nameRef.current.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmite}>
        <label htmlFor="name">Enter your name (UnControlled)</label>
        <input type="text" id="name" defaultValue={""} ref={nameRef} />
        <button type="submite">submite</button>
      </form>
    </>
  );
};
export default UnControlled;
