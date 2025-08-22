import { supabase } from '../config/supabase'

export const testApi = {
  async getAllTestIds(): Promise<string[]> {
    console.log('✅ Test 테이블 조회 시작...')
    
    const { data, error } = await supabase
      .from('test')
      .select('id')
    
    if (error) {
      console.error('❌ Test 테이블 조회 오류:', error)
      
      if (error.message.includes('RLS') || error.message.includes('policy') || error.message.includes('permission')) {
        console.error('RLS (Row Level Security) 정책 문제입니다!')
        console.log('Supabase 대시보드에서 RLS를 비활성화하거나 정책을 추가해주세요.')
        console.log('SQL: ALTER TABLE test DISABLE ROW LEVEL SECURITY;')
      }
      
      if (error.message.includes('does not exist') || error.message.includes('relation') || error.message.includes('404')) {
        console.error('❌ test 테이블이 존재하지 않습니다!')
        console.log('Supabase 대시보드에서 test 테이블을 생성해주세요.')
      }
      
      throw new Error(`Test ID 조회 실패: ${error.message}`)
    }
    
    console.log('✅ 조회된 데이터:', data)
    console.log('✅ 데이터 개수:', data?.length || 0)
    
    if (data && data.length === 0) {
      console.log('테이블은 존재하지만 데이터가 없음음')
      console.log('가능한 원인:')
      console.log('RLS (Row Level Security) 정책이 데이터 접근을 차단')
      console.log('실제로 데이터가 없는 경우')
      console.log('해결방법: Supabase 대시보드에서 RLS를 비활성화하거나 정책을 추가')
    }
    
    return data.map(item => item.id)
  },

  async getAllTests() {
    const { data, error } = await supabase
      .from('test')
      .select('*')
    
    if (error) {
      console.error('❌ Test 데이터 조회 오류:', error)
      
      // RLS 관련 오류인지 확인
      if (error.message.includes('RLS') || error.message.includes('policy') || error.message.includes('permission')) {
        console.error('❌ RLS (Row Level Security) 정책 문제입니다!')
        console.log('💡 Supabase 대시보드에서 RLS를 비활성화하거나 정책을 추가해주세요.')
      }
      
      throw new Error(`Test 데이터 조회 실패: ${error.message}`)
    }
    
    console.log('✅ 전체 데이터 조회 결과:', data)
    console.log('✅ 전체 데이터 개수:', data?.length || 0)
    return data
  },

  async getTestById(id: string) {
    const { data, error } = await supabase
      .from('test')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) {
      console.error('❌ 특정 ID 조회 오류:', error)
      throw new Error(`Test 데이터 조회 실패: ${error.message}`)
    }
    
    return data
  }
}
