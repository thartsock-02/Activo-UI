'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log('onSubmit', data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('example')} />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </main>
  );
}
