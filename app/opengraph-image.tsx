import { ImageResponse } from 'next/og'

export const alt = 'Great Family Group - Kiến tạo những gia đình tuyệt vời'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFF8F0',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#2B2320',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            Kiến tạo những gia đình tuyệt vời
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: '#6B5E57',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Tư vấn gia đình và giải pháp phần mềm tại Việt Nam
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#1F5F5B',
              marginTop: '40px',
            }}
          >
            Great Family Group
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
