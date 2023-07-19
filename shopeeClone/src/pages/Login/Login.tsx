import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { rules } from 'src/utils/rules';


interface FormData {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  })

  return (
    <div className='bg-primary'>
      <div className='max-w-7 mx-auto px-4'>
        <div className='grid grid-col-1 py-12 lg:grid-cols-5 lg:py-24 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form action="" className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className="text-2xl">Đăng nhập</div>
              <div className='mt-8'>
                <input type="email" className='p-3 w-full outline-none border border-gray-30 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='email' {...register('email', rules.email)} />
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <input type="password" autoComplete='on' className='p-3 w-full outline-none border border-gray-30 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='Password' {...register('password', rules.password)} />
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <button type='submit' className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>Đăng nhập</button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center gap-2'>
                  <span className='text-slate-300'>Bạn chưa có tài khoản</span>
                  <Link className='text-red-400' to='/register'>Đăng ký</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
