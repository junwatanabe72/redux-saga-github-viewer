## アプリの概要

- redux-saga-github-viewer
- demo: https://redux-saga-github-viewer-junwatanabe72.netlify.app
- 経緯:redux 及 redux-saga,axios をメインに用いた react アプリケーション学習のため、課題として作成。
- アプリ作者の github レポジトリ（linux）から issue を[get,post,put]。user を[get]するアプリケーション

## 使用した技術

- React
- react-router
- react-modal
- react-toastify
- redux,react-redux
- redux-saga
- axios
- eslint+prettier
- styled-components

## 起動方法

```
git clone ~~~
cd redux-github-viewer
yarn install
yarn start
※非同期通信のAPITOKEN等は独自で設定が必要です。
```

## 設計

```
・ actions => actioncreater,actionを定義する。
・ components => 各種コンポーネントを定義する。
・ reducers =>issue,profile,modalのreducerを定義し、combinereducerも定義する。
・ Container =>reducerとcomponentsをconnectする。
・ sagas => githubAPIに向けてissueのget,post,put,userのgetをするためのジェネレータ関数を定義する。
・ service => axiosを用いたgithubAPIへのリクエスト関数を定義する。
・ utils => axiosのdefault設定,envの切替関数、toastのdefault設定などの設定ファイルを配置。
・ setting =>atomicデザインを元に各種コンポーネントを配置。
```

```
# JSXtree
//saga
sagaMiddleware.run(mySaga);
//saga

<Provider store={store}>
  <app>
    <Router>
        <Header { useState }>
          <HeaderTitle /> => <LinkButton />
          <HeaderLink /> => <LinkButton />
          <HeaderMenu {useRef, useEffect }/> => <ComponentFontAwesomeIcon /> , <HeaderModal />
        </Header>
        <Body>
          <TopRoute>
            <Top { useState }>
              <ContentChange/>
              <Issue /> or<PullRequest />
            </Top>
          </TopRoute>
          <IssueRoute>
            <Issue {useState} {useEffect(document.addEventListener('load', getIssue())}>
              <IssueFunction>
                <Logo />
                <Input/>
                <IssueButtons> => <Button /> => <ModalMain />
              </IssueFunction>
              <IssueMain>
                <IssueTable>
                  <TableHead> => <TableHeadCheckBoxCell /> , <TableHeadCell />
                  <TableBody>
                    <TableData> => <TableDataCheckBoxCell {useState} />
                  </TableBody>
                </IssueTable>
              </IssueMain>
            </Issue>
          </IssueRoute>
          <ProfileRoute>
            <Profile {useEffect(document.addEventListener('load', getUser())}>
              <Logo/>
              <Profilemain>
                <ProfileData/> => <Image />
                <ProfileDataB/>
              </Profilemain>
            </Profile>
          </ProfileRoute>
          <PullRequestRoute>
            <PullRequest> => <Logo />
          </PullRequestRoute>
        </Body>
        <ModalWindow>
          <ModalMain {useState}/> =>  <Logo />,<Button />,<Input />,<textArea />
          <ModalUpdate {useState}> =>  <Logo />,<Button />,<Input />,<textArea />
        </ModalWindow>
    </Router>
  </app>
  <Toastify />
</Provider>
```
