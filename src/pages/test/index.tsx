import { createForm } from '@formily/core';
import { Field } from '@formily/react';
import React, { useMemo } from 'react';
import { Form, FormItem, Radio, Submit } from '@formily/antd';

// import './index.less';

// import 'antd/dist/antd.less';

function Test() {
  const form = useMemo(() => createForm({}), []);
  return (
    <Form form={form} onAutoSubmit={console.log}>
      <div className="block-wrapper">
        <Field
          name="status"
          title="订舱状态"
          dataSource={[
            { label: '未订舱', value: 1 },
            { label: '已订舱', value: 2 },
            { label: '已放舱', value: 3 },
          ]}
          decorator={[FormItem]}
          component={[Radio.Group]}
        />
      </div>
    </Form>
  );
}

export default Test;
