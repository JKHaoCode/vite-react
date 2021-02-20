import React, { useState } from 'react';
import { Button } from 'antd';

const Page3: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      点击次数
      {count}
      <Button type="primary" onClick={() => setCount((i:number) => i + 1)}>点击</Button>
    </div>
  );
};

export default Page3;
