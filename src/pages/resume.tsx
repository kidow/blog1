import {
  ReBold,
  ReContent,
  ReDivider,
  ReLogoIcon,
  ReParagraph,
  ReSEO,
  ReSkill,
  ReProject
} from 'components'
import { Link } from 'gatsby'
import React from 'react'

const ResumePage = () => {
  return (
    <>
      <ReSEO title="이력서" />
      <header className="container max-w-screen-md mx-auto px-2 sm:px-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <ReLogoIcon className="w-20" />
          </Link>
          <div className="text-sm text-gray-600">21년 9월 1일 갱신됨.</div>
        </div>
      </header>
      <div className="container max-w-screen-md mx-auto mb-20">
        <div className="sm:flex mb-8 sm:mb-0 px-2 sm:px-0">
          <div className="flex-1 sm:mb-10 mb-5">
            <h1 className="text-3xl font-bold">김동욱</h1>
            <p className="text-xl text-gray-600">웹 프론트엔드 개발자</p>
          </div>
          <div className="flex-1 flex">
            <ul className="w-28 font-semibold text-gray-400">
              <li>PHONE</li>
              <li>EMAIL</li>
              <li>LOCATION</li>
            </ul>
            <ul className="text-gray-500">
              <li>010-5140-5480</li>
              <li>
                <a href="mailto:wcgo2ling@gmail.com">wcgo2ling@gmail.com</a>
              </li>
              <li>서울</li>
            </ul>
          </div>
        </div>
        <ReDivider />
        <ReContent id="Intro" title="소개">
          <div className="text-gray-400 leading-8">
            <ReParagraph>
              <ReBold>2018년</ReBold> 군 제대 후 바로 웹 개발에 세계에
              빠져들었고, 지금까지 3년 이상 개발을 해오면서 총{' '}
              <ReBold>1년 9개월</ReBold> 경력의 프론트엔드 업무를 해왔습니다.
            </ReParagraph>
            <ReParagraph>
              협업에 있어 가장 중요한 것은 <ReBold>이해와 배려</ReBold>라고
              생각합니다. 아무리 자신 있는 분야라 할지라도 실수는 누구나 할 수
              있습니다. 내가 낸 실수는 원인을 찾아내고 해결하는 것, 다시는 그
              실수가 반복되지 않게 만드는 것이 최우선으로 중요하지만, 팀원이 낸
              실수는 탓하거나 남의 일로 치부할 것이 아니라 함께 머리를 맞대고
              극복해야 할 임무라고 생각합니다. 팀은 성과를 내기 위해 모인
              조직이니까요.
            </ReParagraph>
            <ReParagraph>
              코딩 역시 마찬가지라고 봅니다. 저는 혼자 할 때 주로{' '}
              <ReBold>생산성과 효율성</ReBold>을 우선으로 코드를 짭니다.
              직관적인 구조 설계와 코딩, 중복 제거, 더 빠르고 효율적인 기술을
              찾아보고 채택하는 것 등등을 중점으로 두지만, 협업에 있어서는{' '}
              알아보기 쉬운 코드, 공통된 코드를 짜는 것이 가장 중요하다고
              생각합니다.
            </ReParagraph>
            <ReParagraph>
              저는 효율적인 프로젝트 구조 설계, 중복을 최소화하고 알아보기 쉬운
              코드를 짜는 것에 자신이 있습니다. 최근에는 알고리즘과 자료구조를
              배우면서 성능을 최적화하는 코드를 짜는 것에 관심을 갖고 있습니다.
            </ReParagraph>
          </div>
        </ReContent>
        <ReDivider />
        <ReContent id="Skills" title="기술">
          <ReSkill title="프론트엔드" description="Front-end">
            <ul>
              <li>
                <ReBold>Next.js</ReBold>
              </li>
              <li>
                <ReBold>Typescript</ReBold>
              </li>
              <li>
                <ReBold>TailwindCSS</ReBold>
              </li>
              <li>
                <ReBold>Recoil</ReBold>
              </li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Mobx</li>
            </ul>
          </ReSkill>
          <ReSkill title="백엔드" description="Back-end">
            <ul>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul>
          </ReSkill>
          <ReSkill title="클라우드 플랫폼" description="Cloud Platform">
            <ul>
              <li>Firebase</li>
            </ul>
          </ReSkill>
        </ReContent>
        <ReDivider />
        <ReContent id="Careers" title="경력">
          <ReProject
            title="링크플래너"
            date="2019년 9월 - 2020년 10월"
            link="https://linkplanner.co.kr"
            image="../linkplanner.png"
            tags={[
              'Next.js',
              'React.js',
              'Redux',
              'Mobx',
              'Material-UI',
              'Typescript',
              'Storybook',
              'Jest'
            ]}
          >
            <ReParagraph>
              보험 가입 및 상담 서비스 플랫폼 <ReBold>인슈넷</ReBold>, 보험
              설계사 플랫폼 <ReBold>링크플래너</ReBold>의 유지보수 및 신기능
              추가 및 어드민 사이트 개발까지 전반적인 업무를 주로 맡았습니다.
            </ReParagraph>
            <ReParagraph>
              보험 상품 및 설계사에 대한 검색 최적화, 보험 가입을 온라인으로
              간소화하기 위해 PDF에 서명(이미지)을 삽입하는 기능, Next.js의 정적
              페이지 생성 기능을 이용해 갱신이 잘 되지 않는 페이지는 정적으로
              교체 등 빌드 속도 개선을 하였습니다.
            </ReParagraph>
            <ReParagraph>
              Typescript를 직접 배워서 도입했었고, 특히 코드량이 많아 프로젝트
              설계에 정말 많은 고민을 했었습니다. 메인 프로젝트는 Storybook과
              Jest까지 겸했었기 때문이죠.
            </ReParagraph>
          </ReProject>
          <ReProject
            title="마이비스킷"
            date="2019년 2월 - 2019년 6월"
            link="https://mybiskit.com"
            image="../mybiskit.png"
            tags={['Nuxt.js', 'SQL']}
          >
            <ReParagraph>
              직장인 익명 커뮤니티 <ReBold>blind</ReBold>에서 신 사업으로 추진한
              온라인 취미 클래스 플랫폼 '마이비스킷'의 전반적인 프론트엔드
              업무를 맡았습니다. 당시 React인 줄 알고 갔으나 회사의 요청으로
              급하게 <ReBold>Nuxt.js</ReBold>를 배워서 만들었습니다.
            </ReParagraph>
            <ReParagraph>
              SQL도 어느 정도 익힌 덕에 백엔드 쪽 SQL 코드 작업에도 기여한 바가
              있습니다.
            </ReParagraph>
            <ReParagraph>
              당시 저는 주로 <ReBold>JS, 즉 동적인 기능</ReBold>에 집중했고
              퍼블리셔와 마케팅, 기획 및 CS, 웹 디자인 등 많은 직종과 협업을
              했습니다. 하나의 팀으로 하나의 서비스를 만든 첫 프로젝트다 보니
              다양한 직종 분들과 협업하는 노하우를 많이 배웠습니다.
            </ReParagraph>
          </ReProject>
          <ReProject
            title="강남엄마"
            date="2019년 1월 - 2019년 2월"
            link="https://gangmom.kr"
            image="../gangmom.png"
            tags={['Node.js', 'SQL']}
          >
            <ReParagraph>
              전국 학원 검색 플랫폼 '강남엄마'에서 첫 개발 업무로 백엔드 보조
              알바를 하였습니다.
            </ReParagraph>
            <ReParagraph>
              주된 작업은 SQL 작성으로, 기존에 있던 학원만을 모으는 기능에 더해{' '}
              <ReBold>선생님</ReBold> 기능을 추가하여, 학원에 속한 선생님들
              리스트, 특정 선생님의 이력 및 이력에 따른 학원 목록 가져오기
              등등을 맡았습니다.
            </ReParagraph>
          </ReProject>
        </ReContent>
        <ReDivider />
        <ReContent id="Projects" title="프로젝트">
          <ReProject
            title="다이나미사인"
            date="2021년 5월 ~ 2021년 6월"
            link="https://dynamisign.com"
            image="../dynamisign.png"
            tags={[
              'Next.js',
              'Typescript',
              'TailwindCSS',
              'Recoil',
              'Puppeteer'
            ]}
          >
            <ReParagraph>
              검색 엔진 최적화 시 필요한 이미지를 동적으로 생성할 수 있게 만든{' '}
              <ReBold>SEO 이미지 동적 생성기</ReBold>입니다. 이걸 이용함으로써
              SEO 작업에 필요한 이미지를 좀 더 간소하게 만들 수 있습니다.
            </ReParagraph>
            <ReParagraph>
              Github의 이슈 페이지를 링크로 전송하면 볼 때 미리보기 이미지가
              같은 포맷에 다른 내용으로 나오는 데, 그 것에서 착안해서
              만들었습니다. 본래 크롤링에 자주 쓰이는 <ReBold>Puppeteer</ReBold>
              를 이용하면, html을 서버단에서 스크린샷으로 찍은 뒤 이미지로
              내보내면 그 주소가 곧 이미지가 되는 원리를 이용했습니다.
            </ReParagraph>
          </ReProject>
          <ReProject
            title="블로그 v3"
            date="2021년 3월 ~ 2021년 3월"
            link="https://kidow.me"
            image="../kidow.png"
            tags={['Gatsby.js', 'Typescript', 'TailwindCSS']}
          >
            <ReParagraph>
              2019년도부터 만든 첫번째 블로그를 시작으로, 새 버전으로 디자인을
              개편해 나가면서 다시 새롭게 만든 세 번째 개발 블로그입니다.
            </ReParagraph>
            <ReParagraph>
              검색 엔진 최적화를 위해 Next.js를 사용해 왔으나, 서버사이드로
              데이터와 리소스를 받아 오는 시간이 너무 커서 Gatsby.js를 사용한{' '}
              <ReBold>정적 호스팅</ReBold>으로 속도를 개선하였습니다.
            </ReParagraph>
            <ReParagraph>
              주로 제가 배우고 쓰는 기술과 노하우들을 잊지 않기 위해 정리하는
              식으로 글들을 작성합니다.
            </ReParagraph>
          </ReProject>
          <ReProject
            title="디디톡"
            date="2020년 6월 ~ 2020년 7월"
            link="https://ddtalk.kr"
            image="../ddtalk.png"
            tags={['React.js', 'Redux', 'Typescript', 'Firebase']}
          >
            <ReParagraph>
              <ReBold>코드 블럭</ReBold>을 같이 올릴 수 있는{' '}
              <ReBold>개발자 채팅방</ReBold>입니다. 당시 개발자들의 소통방이
              카카오톡 아니면 슬랙이었는데, 그 곳은 코드를 작성할 수가 없어 따로
              사진을 찍어 올리는 경우가 많았습니다. 코드를 올릴 수 있는 채팅방
              서비스를 만들면 괜찮겠다는 생각으로 만들었습니다.
            </ReParagraph>
            <ReParagraph>
              출시 후 6개월 동안 <ReBold>2,500명</ReBold>의 유저가
              방문해주었지만 지금은 간간히 유저가 들어오는 상황입니다. 당시에
              많은 유저분들이 잘 됐으면 좋겠다는 응원의 메세지가 많아서
              좋았었지만, 이런 반응이 처음이었던 저는 걱정이 많았습니다.
              만들줄만 알았지, 이 이후에 어떤 걸 먼저 해야할 지 정리가 되질
              않았던 겁니다.
            </ReParagraph>
            <ReParagraph>
              직접 마케팅도 할 줄 몰랐고, 출시 초기 많았던 유저들이 떠나면서
              의욕까지 잃기도 했지만 저는 아직도 이 프로젝트를 다시 살리고 싶은
              욕심이 있습니다.
            </ReParagraph>
            <ReParagraph>
              현재 도메인을 산 계정이 잠겨서 관리가 안되는 상태인데, 해결되면
              조만간 새 기술로 재단장할 예정입니다.
            </ReParagraph>
          </ReProject>
        </ReContent>
        <ReDivider />
        <ReContent id="Education" title="학력">
          <ReProject
            title="세종대학교"
            date="2015년 물리학과 입학 ~ "
            link="http://sejong.ac.kr"
            image="../sejong-university.jpg"
          >
            2학년 1학기까지 다녔고, 군 제대 후부터 바로 개발에 입문하면서 쭉
            휴학을 이어왔고, 학업보다 개발에 열중하고자 자퇴할 예정입니다.
          </ReProject>
        </ReContent>
      </div>
    </>
  )
}

export default ResumePage
