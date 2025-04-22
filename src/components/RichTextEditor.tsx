import React from 'react';
import { 
  ConfigurableEditorWithAuth, 
  EditorProvider,
  defaultEditorConfig
} from 'ct-rich-text-editor';
import 'ct-rich-text-editor/style.css';

const RichTextEditor: React.FC = () => {
  // Replace with your actual API key
  const apiKey = 'your-api-key-here';
  
  return (
    <div className="rich-text-editor-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Rich Text Editor</h1>
      <EditorProvider
        defaultFontFamilies={defaultEditorConfig.defaultFontFamilies}
        mentionUserList={defaultEditorConfig.mentionUserList}
      >
        <ConfigurableEditorWithAuth
          apiKey={apiKey}
          onAuthSuccess={() => console.log('Authentication successful')}
          onAuthError={(error) => console.error('Authentication error:', error)}
        />
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor; 