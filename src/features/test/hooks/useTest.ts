import { useState, useEffect } from 'react'
import { testApi } from '../../../shared/api/testApi'

export const useTest = () => {
  const [testIds, setTestIds] = useState<string[]>([])
  const [testData, setTestData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        console.log('✅ Supabase 연결 테스트 시작...')
        
        // Test ID 조회
        console.log('✅ Test ID 조회 중...')
        const ids = await testApi.getAllTestIds()
        setTestIds(ids)
        console.log('✅ Test ID 조회 성공:', ids)
        
        // Test 데이터 조회
        console.log('✅ Test 데이터 조회 중...')
        const data = await testApi.getAllTests()
        setTestData(data)
        console.log('✅ Test 데이터 조회 성공:', data)
        
        console.log('✅ Supabase 연결 테스트 완료!')
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '데이터 조회에 실패했습니다.'
        setError(errorMessage)
        console.error('❌ Supabase 연결 테스트 실패:', errorMessage)
        console.error('상세 오류:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const fetchAllTestIds = async () => {
    try {
      setLoading(true)
      setError(null)
      const ids = await testApi.getAllTestIds()
      setTestIds(ids)
      return ids
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Test ID 조회에 실패했습니다.'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // 모든 test 데이터 조회
  const fetchAllTests = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await testApi.getAllTests()
      setTestData(data)
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Test 데이터 조회에 실패했습니다.'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // 특정 test 데이터 조회
  const fetchTestById = async (id: string) => {
    try {
      setLoading(true)
      setError(null)
      const data = await testApi.getTestById(id)
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Test 데이터 조회에 실패했습니다.'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return {
    testIds,
    testData,
    loading,
    error,
    fetchAllTestIds,
    fetchAllTests,
    fetchTestById,
  }
}
