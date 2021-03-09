
import React, { useState } from 'react';
import { Form } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import StepperSelect from '../input-fields/stepper-select';
import StepperPhoneInput from '../input-fields/stepper-phone-input';
import '../../styles/steps/step-two.sass'
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepOneGenerator = () => {
  const [form] = Form.useForm();
  const [radioGroupValue, setRadioGroupValue] = useState('Riyadh');
  const [options, setOptions] = useState([
    { value: 'whatever', label: 'whatever' },
    { value: 'whatever1', label: 'whatever1' },
    { value: 'whatever2', label: 'whatever2' }
  ])
  return (
    <div className="step-two-wrapper">
      <p style={{ display: 'block' }}>Store</p>
      <div>
        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                placeHolder="What's your store name?"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" name="storeName" label="Store Name" />
              <StepperInput
                onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                placeHolder="Company legal name"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" name="legalName" label="Legal Name" />
            </div>
          </Form>
        </div>

        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="phoneNumber" label="Phone Number">
                <StepperPhoneInput />
              </Form.Item>
              <Form.Item className="full-flex-item column-flex-direction" name="legalName" label="What kind of product do you sell?">
                <StepperSelect options={options} placeholder='E.G. Electronics' />
              </Form.Item>
            </div>
          </Form>
        </div>



        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                placeHolder="Please Enter Your Full Address"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" name="address" label="Full Address" />
            </div>
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                placeHolder="https://www.facebook.com/..."
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" name="facebook" label="Facebook Account"
              />
            </div>
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                placeHolder="https://www.twitter.com/..."
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" name="twitter" label="Twitter Account"
              />
            </div>
          </Form>
        </div>
      </div>

    </div>

  );
};

export default StepOneGenerator;