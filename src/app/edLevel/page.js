"use client";

import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { edLevelAtom } from "../../utils/atoms";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  const [edLevel, setEdLevel] = useAtom(edLevelAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setEdLevel(data.edLevel);
    console.log(data.edLevel);
    router.push("/direction");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Tell us more about your search</label>
      <label>Which is your education level?</label>
      <select {...register("edLevel")}>
        <option value="highschool">Highschool</option>
        <option value="college">College</option>
        <option value="grad">Grad</option>
      </select>
      <label>...add the other ones here</label>
      <input type="submit" />
    </form>
  );
};
