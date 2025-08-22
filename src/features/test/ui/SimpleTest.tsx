import React from 'react'
import { useTest } from '../hooks/useTest'

const SimpleTest: React.FC = () => {
  const { testIds, testData, loading, error } = useTest()

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', margin: '10px', borderRadius: '8px' }}>
      <h3>Supabase 연결 테스트</h3>
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>오류: {error}</p>}
      {!loading && !error && (
        <div>
          <p>✅ 연결 성공!</p>
          <p>Test ID 개수: {testIds.length}</p>
          <p>Test 데이터 개수: {testData.length}</p>
          <details>
            <summary>데이터 확인</summary>
            <pre style={{ fontSize: '12px', backgroundColor: 'white', padding: '10px', overflow: 'auto' }}>
              {JSON.stringify({ testIds, testData }, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  )
}

export default SimpleTest
