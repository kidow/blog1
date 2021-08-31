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
          <div className="text-sm text-gray-600">21년 8월 31일 갱신됨.</div>
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
              실수가 반복되지 않게 하는 것이 최우선으로 중요하지만, 팀원이 낸
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
              생각합니다. 저는 기본적으로 '2주 뒤에 다시 봐도 알아볼 수 코드를
              짜는 것'을 철칙으로 정하고 있습니다.
            </ReParagraph>
            <ReParagraph>
              저는 공부를 할 때 주로 <ReBold>개인 프로젝트</ReBold>를 만들면서
              익힙니다. 익혀보고 싶은 기술이 생기면, 작은 아이디어를 떠올리고
              프로젝트를 만들어 보면서 실험을 해보는 거죠. 그냥 배우는 것보다
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
                <ReBold>Recoil</ReBold>
              </li>
              <li>React.js</li>
              <li>TailwindCSS</li>
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
              'Typescript'
            ]}
          >
            chidlren
          </ReProject>
          <ReProject
            title="마이비스킷"
            date="2019년 2월 - 2019년 6월"
            link="https://mybiskit.com"
            image="../mybiskit.png"
            tags={['Nuxt.js', 'SQL']}
          >
            ㅁㄴㅇ
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
            <ReParagraph></ReParagraph>
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
            asd
          </ReProject>
          <ReProject
            title="블로그 v3"
            date="2021년 3월 ~ 2021년 3월"
            link="https://kidow.me"
            image="../kidow.png"
            tags={['Gatsby.js', 'Typescript']}
          >
            <ReParagraph>
              2019년도부터 만든 첫번째 블로그를 시작으로, 새 버전으로 디자인을
              개편해 나가면서 다시 새롭게 만든 세 번째 블로그입니다.
            </ReParagraph>
          </ReProject>
          <ReProject
            title="디디톡"
            date="2020년 6월 ~ 2020년 7월"
            link="https://ddtalk.kr"
            image="../ddtalk.png"
            tags={['React.js', 'Redux', 'Typescript', 'Firebase']}
          >
            gewewg
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
