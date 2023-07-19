import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { rules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  comfirm_password: string
}

export default function Register() {
  const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm<FormData>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  },
    (data) => {

    }
  )
  return (
    <div className='bg-primary'>
      <div className='max-w-7 mx-auto px-4'>
        <div className='grid grid-col-1 py-12 lg:grid-cols-5 lg:py-24 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form action="" className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className="text-2xl">Đăng ký</div>
              <div className='mt-8'>
                <input type="email" className='p-3 w-full outline-none border border-gray-30 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='email'
                  {...register('email', rules.email)} />
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <input type="password" autoComplete='on' className='p-3 w-full outline-none border border-gray-30 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='Password' {...register('password', rules.password)} />
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <input type="password" autoComplete='on' className='p-3 w-full outline-none border border-gray-30 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='Comfirm password' {...register('comfirm_password', {
                  ...rules.comfirm_password, validate: value => {
                    if (value === getValues('password')) {
                      return true
                    }
                    return 'Nhập lại password không khớp'
                  }
                })} />
                <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'>{errors.comfirm_password?.message}</div>
              </div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>Đăng ký</button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center gap-2'>
                  <span className='text-slate-300'>Bạn đã có tài khoản</span>
                  <Link className='text-red-400' to='/login'>Đăng nhập</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
