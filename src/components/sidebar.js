import React from 'react';

const Card = ({ children }) => {
  return <div className="border rounded-lg shadow-lg p-4">{children}</div>;
};

const IframeExample = () => {
  const iframeContent = `
 
  
              <div class="counter-value" data-count="0">0</div></li>
          
              
  `;

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <iframe
          title="Statistics Website"
          width="100%"
          height="600px"
          srcDoc={iframeContent}
        />
      </Card>
    </div>
  );
};

export default IframeExample;
