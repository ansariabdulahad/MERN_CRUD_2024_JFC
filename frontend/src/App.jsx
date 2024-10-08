import React, { useState } from 'react'
import { Button, Form, Image, Input, Modal, Select, Table } from 'antd';
import { DeleteFilled, EditFilled, PlusOutlined } from '@ant-design/icons';

const App = () => {

  const [modal, setModal] = useState(false);

  const columns = [
    {
      title: 'Profile',
      dataIndex: 'profile',
      key: 'profile'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile'
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <div className='flex gap-2'>
          <Button
            icon={<EditFilled />}
            shape='circle'
            type='text'
            size='large'
            className='shadow-lg bg-green-500 hover:bg-white hover:border-1 hover:border-green-700
             text-white hover:text-green-700 font-bold'
          />
          <Button
            icon={<DeleteFilled />}
            shape='circle'
            type='text'
            size='large'
            className='shadow-lg bg-red-500 hover:bg-white hover:border-1 hover:border-red-700 text-white hover:text-red-700 font-bold'
          />
        </div>
      )
    }
  ];

  const data = [
    {
      key: '1',
      profile: <Image src={"/images/avatar.jpeg"} width={40} alt='profile-img'
        className='rounded-full object-center shadow-sm'
      />,
      name: "Abdul Ahad Ansari",
      email: "ansariabdulahad3@gmail.com",
      mobile: 9545282408,
      dob: "23-01-2001",
      gender: "Male",
      address: "Bhiwandi, Thane, Maharashtra, India"
    },
    {
      key: '2',
      profile: <Image src={"/images/avatar.jpeg"} width={40} alt='profile-img'
        className='rounded-full object-center shadow-sm'
      />,
      name: "Abdul Ahad Ansari",
      email: "ansariabdulahad3@gmail.com",
      mobile: 9545282408,
      dob: "23-01-2001",
      gender: "Male",
      address: "Bhiwandi, Thane, Maharashtra, India"
    },
    {
      key: '3',
      profile: <Image src={"/images/avatar.jpeg"} width={40} alt='profile-img'
        className='rounded-full object-center shadow-sm'
      />,
      name: "Abdul Ahad Ansari",
      email: "ansariabdulahad3@gmail.com",
      mobile: 9545282408,
      dob: "23-01-2001",
      gender: "Male",
      address: "Bhiwandi, Thane, Maharashtra, India"
    },
    {
      key: '4',
      profile: <Image src={"/images/avatar.jpeg"} width={40} alt='profile-img'
        className='rounded-full object-center shadow-sm'
      />,
      name: "Abdul Ahad Ansari",
      email: "ansariabdulahad3@gmail.com",
      mobile: 9545282408,
      dob: "23-01-2001",
      gender: "Male",
      address: "Bhiwandi, Thane, Maharashtra, India"
    },
    {
      key: '5',
      profile: <Image src={"/images/avatar.jpeg"} width={40} alt='profile-img'
        className='rounded-full object-center shadow-sm'
      />,
      name: "Abdul Ahad Ansari",
      email: "ansariabdulahad3@gmail.com",
      mobile: 9545282408,
      dob: "23-01-2001",
      gender: "Male",
      address: "Bhiwandi, Thane, Maharashtra, India"
    },
    {
      key: '6',
      profile: <Image src={"/images/avatar.jpeg"} width={40} alt='profile-img'
        className='rounded-full object-center shadow-sm'
      />,
      name: "Abdul Ahad Ansari",
      email: "ansariabdulahad3@gmail.com",
      mobile: 9545282408,
      dob: "23-01-2001",
      gender: "Male",
      address: "Bhiwandi, Thane, Maharashtra, India"
    },
    {
      key: '7',
      profile: <Image src={"/images/avatar.jpeg"} width={40} alt='profile-img'
        className='rounded-full object-center shadow-sm'
      />,
      name: "Abdul Ahad Ansari",
      email: "ansariabdulahad3@gmail.com",
      mobile: 9545282408,
      dob: "23-01-2001",
      gender: "Male",
      address: "Bhiwandi, Thane, Maharashtra, India"
    },

  ];

  return (
    <div className='min-h-screen flex flex-col items-center bg-green-100 p-2 md:p-4'>
      <div className='flex justify-between items-center bg-blue-400 w-10/12 my-5 p-4 rounded'>
        <h1 className='text-white font-bold bg-black text-2xl md:text-5xl p-2 md:p-4 
        rounded shadow'>MERN CRUD OPERATIONS</h1>
        <Button
          icon={<PlusOutlined />}
          shape='circle'
          size='large'
          className='bg-black text-white border-1 border-blue-700 font-bold shadow md:p-4 md:text-2xl m-2'
          onClick={() => setModal(true)}
        >
          <span className='sr-only'>Add Data</span>
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data || []}
        scroll={{
          x: 1000,
          // y: "max-content"
        }}
        pagination={{
          pageSize: 5,
          position: ['bottomCenter']
        }}
        className='shadow-lg w-10/12 my-5'
      />

      <Modal
        open={modal}
        onCancel={() => setModal(false)}
        footer={null}
        width={720}
        title={
          <h1 className='font-semibold text-xl my-5 text-center'>
            Registration Form
          </h1>
        }
      >

        <Form
          variant='outlined'
          layout='vertical'
          className='font-semibold shadow-lg p-2 rounded bg-gray-100'
        >
          <div className='grid md:grid-cols-2 gap-x-2'>

            <Form.Item
              label="Profile"
              name={'profile'}
            >
              <Input
                type='file'
                className='shadow'
              />
            </Form.Item>

            <Form.Item
              label="Full Name"
              name={'fullname'}
              rules={[
                { required: true }
              ]}
            >
              <Input
                type='text'
                className='shadow'
                size='large'
                placeholder='Enter name'
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name={'email'}
              rules={[
                { required: true }
              ]}
            >
              <Input
                type='email'
                className='shadow'
                size='large'
                placeholder='Enter email address'
              />
            </Form.Item>

            <Form.Item
              label="Mobile"
              name={'mobile'}
              rules={[
                { required: true }
              ]}
            >
              <Input
                type='tel'
                className='shadow'
                size='large'
                placeholder='Enter mobile number'
              />
            </Form.Item>

            <Form.Item
              label="DOB"
              name={'dob'}
              rules={[
                { required: true }
              ]}
            >
              <Input
                type='date'
                className='shadow'
                size='large'
                placeholder='Enter DOB'
              />
            </Form.Item>

            <Form.Item
              label="Gender"
              name={'gender'}
              rules={[
                { required: true }
              ]}
            >
              <Select
                className='shadow'
                size='large'
                placeholder="Choose gender"
              >
                <Select.Option value='male'>Male</Select.Option>
                <Select.Option value='female'>Female</Select.Option>
              </Select>
            </Form.Item>

          </div>

          <Form.Item
            label="Address"
            name={'address'}
            rules={[
              { required: true }
            ]}
          >
            <Input.TextArea
              className='shadow'
              size='large'
              placeholder='Enter address...'
            ></Input.TextArea>
          </Form.Item>

          <Form.Item>
            <Button
              className='shadow w-full bg-blue-600 text-white font-semibold'
              size='large'
              icon={<PlusOutlined />}
            >
              Register Now
            </Button>
          </Form.Item>

        </Form>

      </Modal>
    </div>
  )
}

export default App