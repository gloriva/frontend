import React from 'react'
import { useTest } from '../hooks/useTest'

const TestComponent: React.FC = () => {
  const { testIds, testData, loading, error } = useTest()

  // 렌더링만 하고 UI는 표시하지 않음 (콘솔 로그만 확인용)
  return null
}

export default TestComponent
