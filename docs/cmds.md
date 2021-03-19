---
hide:
  - navigation
title: "RSS ZE 어드민 명령어 모음집"
description: "RSS 서버 어드민들을 위한 명령어 모음집.\n북마크 해두시면 좋습니다."
---

# RSS ZE서버 어드민 명령어 모음집 { class="can-use-filter" }

RSS ZE서버 어드민 전용 명령어 모음집입니다[^1]. 이 문서 내용을 어드민 게시판에 써두면 매번 들어갈때마다 로그인 해야하는데다가, 필요한데 사용할 수 없는 기능들이 있으므로 별도의 사이트에 작성합니다. 이 페이지는 구글 검색 등에 노출되지 않을 뿐만 아니라 설사 이 페이지가 노출된다고 하더라도 관리자 권한이 없으면 명령어들을 서버에서 사용할 수 없으므로 안전합니다.  
PC 화면 기준 오른쪽에 목차가 있습니다. 목차의 항목을 클릭하면 해당 명령어 설명으로 빠르게 이동할 수 있습니다.  
또한 어드민은 `sv_cheats` 값이 별도로 관리되므로, `sv_cheats 1`이 필요한 명령어(`mat_colorcorrection` 등)을 별다른 문제 없이 사용할 수 있습니다.

==명령어를 어떻게 사용해야 할지 잘 모르겠거나, 특정 맵에 대한 명령어(forceinput 등) 안내가 필요한 경우, Hestia를 호출해주세요.==  
==또한 이 리스트에 등재된 명령어 이외의 다른 명령어나 기능에 대해서는 Hestia 혹은 영몽님과 상의하세요.==

* `!`이나 `/`으로 시작하는 명령어들은 인게임 채팅에 입력하여 사용하는 명령어입니다.  
  이외의 명령어는 게임 콘솔(\`키로 접근 가능)에 입력하는 명령어입니다.
* `[]`으로 감싸여져있는 부분은 선택사항입니다. 굳이 명시하지 않아도 좋습니다.  
* `nickname`이나 `target`은 `""`(쌍따옴표)로 **반드시** 감싸야 합니다.  

<br><br>

## 일반 & 정보
### sm_admin
어드민 메뉴를 화면 좌측에 불러옵니다.  
!!! tip
    `bind "p" "sm_admin"`을 콘솔에 입력한 후, P키를 누르면 손쉽게 어드민 메뉴를 열 수 있습니다.

### /zadmin
좀비탈출 모드 관련 어드민 메뉴를 화면 좌측에 불러옵니다. 여기에서 좀비/인간 설정이나 무기 구매 제한 설정 등을 진행할 수 있습니다.

### status
현재 서버에 접속해 있는 사람의 목록을 출력합니다. 콘솔에서 이 명령어를 사용하면 다음과 같은 결과가 나옵니다.  

??? example "이미지 보기"
    ![status 결과 화면](https://i.imgur.com/aPnyihc.png)  
`UserID`는 붉은색으로 표시된 숫자들이며 공백 뒤의 숫자는 무시하면 됩니다.  
`SteamID`는 `STEAM_`으로 시작하는 문자열이며, `STEAM_X:Y:ZZZZ~`의 형식을 취하고 있습니다.
!!! warning
    글옵 버그로 인해 `status` 명령어는 최대 55명 가량 정도의 정보만 표시합니다. 만약 찾는 사람이 `status`에 나타나지 않는다면 `/authid` 명령어를 사용하세요.

### 필터 사용 안내
몇몇 명령어는 `"nickname"`이나 `"target"` 자리에 필터를 사용할 수 있습니다. 특정 분류의 플레이어들을 한꺼번에 묶어서 처리할 수 있습니다. 필터를 사용 가능한 명령어는 명령어 끝에 ◎를 붙여놓겠습니다.  
다만 일부 명령어의 경우 적어놓은 대로 사용하는 것이 권장됩니다.
??? abstract "필터 목록"
    * `@all`: 모든 플레이어 (사용에 주의하세요)
    * `@ct`: 인간(CT)
    * `@t`: 좀비(TR)
    * `@random`: 모든 플레이어 중 한명
    * `@randomct`: 인간(CT) 중 한명
    * `@randomt`: 좀비(TR) 중 한명
    * `@admins`: 어드민(들)
    * `@!admins`: 어드민(들)을 제외한 모든 플레이어
    * `@me`: 나 자신
    * `@!me`: 나를 제외한 모든 플레이어

이외의 필터는 사용할 수 없습니다. 따라서 `@!randomct`와 같은 사용은 불가능합니다.
!!! warning
    필터를 사용할 때에는 `""`를 사용하지 않습니다!  
    사용 예시: `/slay @all`, `/hp @ct 500`, `/god @ct 1`

### 특수 채팅
인게임 채팅창에 `@`를 입력한 이후 원하는 메시지를 입력하여 특수 채팅을 사용할 수 있습니다.

* `@`: 어드민 전체챗 - 붉은색으로 강조된 메시지을 모두에게 표시합니다.
* `@@@`: HUD 전체챗 - 화면 중앙 도움말 HUD에 메세지를 출력합니다.
* 팀챗에서 `@`: 어드민 전용 채팅 - 어드민만 볼 수 있는 메시지를 작성합니다.

<br><br>

## 플레이어 관리
### /authid "nickname" { class="can-use-filter" }
해당 플레이어의 SteamID, UserID를 출력합니다.  
!!! info
    일반 플레이어도 사용 가능한 명령어입니다. 관리의 편의성 때문에 어드민 명령어를 서술하는 장소임에도 서술했습니다.

### /kick "nickname" ["reason"] { class="can-use-filter" }
해당 플레이어를 서버에서 추방(kick)합니다. 추방된 플레이어는 현재 차단(ban)이 유효하지 않다면 다시 접속할 수 있습니다.  
UserID를 사용할 시 `/kick #123` 같은 형식으로 사용할 수 있습니다.  
!!! tip
    관전자를 추방할 시 `/kick @spec AFK`와 같은 형식으로 사용할 수 있습니다.

### /ban "nickname" ["time" "reason"]
해당 플레이어를 서버에서 차단(ban)합니다. 해당 플레이어가 서버 내에 있을 경우 사용하면 좋습니다.  
이 명령어를 사용할 시, 해당 플레이어를 즉시 서버에서 추방 및 차단합니다(kick + ban).  
시간, 사유 등의 세부사항 변경은 소스밴에서 진행할 수 있습니다.
!!! warning
    사유를 작성할 때 `""`로 감싸지 않는다면 소스밴에서 `? ? ? ? ? ?`와 같이 표시됩니다!

### /addban "time" "steamid" "reason"
주어진 `steamiD`에 해당하는 플레이어를 `time`에 명시된 시간(단위: 분)만큼 서버에서 차단(ban)합니다. 플레이어가 서버에 없더라도 사용할 수 있습니다.  
이 명령어를 사용할 시 해당 플레이어는 맵이 바뀌거나 추방(kick)되면 다시 서버에 들어올 수 없습니다. 이 명령어를 사용했다면 수동으로 `/kick`을 사용해주세요.  
시간, 사유 등의 세부사항 변경은 소스밴에서 진행할 수 있습니다.  
!!! warning
    UserID 사용이 불가능합니다. **반드시 SteamID를 사용하세요.**  
    실험 결과 `#123`을 차단하면 실제로 `#123` 닉네임을 가진 사람을 차단하게 됩니다.
!!! warning
    사유를 작성할 때 `""`로 감싸지 않는다면 소스밴에서 `? ? ? ? ? ?`와 같이 표시됩니다!

### /gag "nickname" "time" "reason" | /ungag "nickname"
해당 플레이어의 채팅을 금지시킵니다. 시간은 분 단위이며 시간을 명시하지 않았을 때에는 30분으로 적용됩니다. 해제는 `/ungag`로 가능합니다.  
시간, 사유 등의 세부사항 변경은 소스밴에서 진행할 수 있습니다.

### /mute "nickname" "time" "reason" | /unmute "nickname"
해당 플레이어의 음성 채팅을 금지시킵니다. 시간은 분 단위이며 시간을 명시하지 않았을 때에는 30분으로 적용됩니다. 해제는 `/unmute`로 가능합니다.  
시간, 사유 등의 세부사항 변경은 소스밴에서 진행할 수 있습니다.

### /afk_spec "nickname" { class="can-use-filter" }
해당 플레이어를 관전자 팀으로 강제로 보냅니다. `@me`를 쓰면 본인을 관전자 팀으로 옮길 수 있습니다.

### /zr_infect "nickname" { class="can-use-filter" }
해당 플레이어를 좀비(T)로 만듭니다.

### /zr_human @!me { class="can-use-filter" }
본인을 제외한 모든 플레이어들을 인간(CT)로 만듭니다.
!!! warning
    사용하기 전 본인을 좀비로 만들고 쓰세요! (`/zr_infect @me`)

### /respawn
현재 사망한 모든 플레이어들을 인간으로 강제 스폰시킵니다. `/zr_zspawn_force @all 0`과 같은 효과입니다.  

### /zr_zspawn_force @all 1 { class="can-use-filter" }
현재 사망한 모든 플레이어들을 좀비로 강제 스폰시킵니다.  
??? danger "사용금지"
    * `0`: 인간(CT) [기본값]
    * `1`: 좀비(TR)
    * `2`: 관전자

!!! tip
    죽은 사람을 좀비로 살리려면 `/zr_zspawn_force @all 1`을 사용하면 됩니다.

### /god "nickname" [0, 1] { class="can-use-filter" }
해당 플레이어의 갓모드를 비활성화 하거나 활성화 합니다.

* `0`: 갓모드 비활성화
* `1`: 갓모드 활성화

### /para
인간(CT)의 체력을 100으로 **설정**합니다. 오버힐 상태라도 100으로 설정하므로, 사용에 유의하세요.[^2]

### /hp "nickname" "value" { class="can-use-filter" }
해당 플레이어의 체력을 `value`의 값으로 설정합니다. 체력 수치의 최대값은 65535입니다. 그 이상의 값을 설정할 시 `value - 65535`의 값으로 체력이 설정됩니다.

### /armor "nickname" "value" { class="can-use-filter" }
해당 플레이어의 방탄복 수치를 `value`의 값으로 설정합니다. 방탄복 수치의 최대값은 255입니다.

### /weapon "nickname" "weapon_name" ["quantity"] { class="can-use-filter" }
해당 플레이어에게 해당 무기를 지급합니다. `@all`을 사용할 시 좀비에게도 총이 지급되므로, `@ct`를 사용하세요.  
사용 가능한 무기 목록은 다음과 같습니다.
??? abstract "무기 목록"
    * `ak47`
    * `aug`
    * `awp`
    * `c4`
    * `cz75a`
    * `deagle`
    * `decoy`
    * `elite`
    * `famas`
    * `fiveseven`
    * `flashbang`
    * `g3sg1`
    * `galilar`
    * `glock`
    * `healthshot`
    * `hegrenade`: 고폭수류탄
    * `hkp2000`
    * `incgrenade`: 대테러리스트 화염수류탄
    * `knife`
    * `knifegg`
    * `m249`
    * `m4a1`
    * `m4a1_silencer`
    * `mac10`
    * `mag7`
    * `molotov`: 테러리스트 화염병
    * `mp5sd`
    * `mp7`
    * `mp9`
    * `negev`
    * `nova`
    * `p250`
    * `p90`
    * `revolver`
    * `sawedoff`
    * `scar20`
    * `sg556`
    * `smokegrenade`
    * `ssg08`
    * `tagrenade`: 적 하이라이트 하는 인식수류탄
    * `taser`
    * `tec9`
    * `ump45`
    * `usp_silencer`
    * `xm1014`

### /godelites @me { class="can-use-filter" }
'*개쩌는* 듀얼베레타'를 소환합니다. 총을 쏠 때마다 착탄 지점에 두가지 중 하나의 효과가 무작위로 적용됩니다.

* 주변 좀비를 1초 가량 얼림
* 폭발

### /strip "nickname" { class="can-use-filter" }
해당 플레이어의 무기와 방탄복을 제거합니다.

### /iammo "nickname" "value" { class="can-use-filter" }
해당 플레이어의 '무한총탄' 모드를 설정합니다. `value` 값이 1이면 무한총탄 모드를 활성화하고, 0이면 무한총탄 모드를 비활성화 합니다.

### /speed "nickname" "value" { class="can-use-filter" }
해당 플레이어의 이동속도를 설정합니다. `value`의 기본값은 1입니다.

### /team "nickname" "team_number" { class="can-use-filter" }
해당 플레이어의 팀을 설정합니다. 사용 가능한 팀 숫자는 다음과 같습니다.  
!!! warning
    `/zr_zspawn_force`의 팀 숫자와 다름에 유의하세요!

* `0`: 사망(관전자와 같으나, 탭 리스트에서 사라짐)
* `1`: 관전자
* `2`: 좀비(TR)
* `3`: 인간(CT)

!!! tip
    `/team @me 0`을 이용해 사망 팀에 들어가면 관전킥 당하지 않습니다.

### /cash "nickname" "value" { class="can-use-filter" }
해당 플레이어의 달러($) 값을 설정합니다. 이 명령어를 사용했다고 해서 추가적으로 달러($)를 소모하거나 획득하지 못하는 것은 아닙니다.

### /setscore "nickname" "value" { class="can-use-filter" }
해당 플레이어의 사살 횟수를 설정합니다. 플레이어의 점수는 다음 공식에 따라 산출됩니다.
!!! note
    점수 = 사살(kill) + 어시스트 - 사망(death)

### /setdeaths "nickname" "value" { class="can-use-filter" }
해당 플레이어의 사망 횟수를 설정합니다. 플레이어의 점수는 다음 공식에 따라 산출됩니다.
!!! note
    점수 = 사살(kill) + 어시스트 - 사망(death)

### /setmvp "nickname" "value" { class="can-use-filter" }
해당 플레이어의 MVP 선정 횟수를 설정합니다. MVP 선정 횟수의 가능한 값은 0 이상, 999 이하입니다.

### /setteamscore "team" "value" { class="can-use-filter" }
해당 팀의 점수를 설정합니다. `team`에는 반드시 `@ct`나 `@t`같은 필터를 사용하세요.

### /rc
`/c`를 통해 사용할 수 있는 오더핑을 해제합니다. 해제된 오더핑은 다른 사람이 다시 `/c`를 통해 획득할 수 있습니다.  
어떤 사람이 오더핑을 가져가야 하는데 다른 사람이 오더핑을 내놓지 않을 때 쓸 수 있습니다.

### /etransfer "nickname_a" "nickname_b"
A 플레이어가 소지하고 있는 아이템을 B 플레이어에게 옮깁니다.

### /etransfer $item_name "nickname"
해당 아이템을 특정 플레이어에게 부여합니다. 아이템이 텔레포트 영역 너머에 있는 경우에 사용할 수 있습니다.

### /eban "nickname" "time" "reason" | /uneban "nickname"
해당 플레이어의 아이템 소지/사용을 금지시킵니다. 해당 플레이어는 아이템을 집을 수도 없고, 사용할 수도 없습니다. `/uneban`으로 밴을 해제할 수 있습니다.  
시간, 사유 등의 세부사항 변경은 소스밴에서 진행할 수 있습니다.

### /bring "nickname" { class="can-use-filter" }
해당 플레이어를 현재 에임이 향하고 있는 곳에 소환합니다. 플레이어(들)이 바닥이나 벽에 끼는 불상사를 방지하기 위해 자신의 발 밑을 보고 사용하세요.

### /goto "nickname"
해당 플레이어의 위치로 이동합니다.

### /rename "current_nickname" "new_nickname"
해당 플레이어의 닉네임을 변경합니다.  
**==사용 금지==**

### /setclantag "nickname" "string" { class="can-use-filter" }
해당 플레이어의 그룹 태그를 설정합니다. 이 명령어를 통해 그룹 태그가 설정되면 맵이 변경되기 전까지 그룹 태그를 다시 바꿀 수 없습니다.  
!!! warning
    `"string"`을 쓸 때, 반드시 앞뒤에 큰따옴표(`""`)를 붙여야 합니다!

### /modelscale "nickname" "value" { class="can-use-filter" }
해당 플레이어의 모델 크기를 설정합니다. `value`의 기본값은 1이며, 절대로 5 이상의 값으로 설정하거나 0으로 설정해서는 안됩니다.

### sm_setmodel @me "model_path"
자신의 플레이어 모델을 변경합니다.
??? abstract "사용 가능한 모델 경로 예시"
    `/model`로 시작하는 모델은 글옵 모델 경로에 있는 모델이며, `model`로 시작하는 모델은 맵 자체 모델 경로에 있는 모델입니다.

    * `/models/player/uuz/kirby/kirby.mdl`: 커비
    * `models/syoudous/bahamut.mdl`: (마코 v5 맵) 바하무트

### /bury "nickname" | /unbury "nickname"
대상을 땅에 파묻어 움직이지 못하게 만듭니다. `/unbury`로 해제할 수 있습니다.

<br><br>

## 맵
### /map "mapname"
해당 맵으로 변경합니다. 맵 이름을 대소문자 구분해서 토씨하나 틀림없이 정확히 입력해야 하므로, 가급적이면 `sm_admin`의 메뉴를 통해 이용해주세요. 그리고 맵 이름을 `" "`(큰따옴표) 사이에 넣어주세요.

### /rcon sm_nextmap "mapname"
해당 맵을 다음 맵으로 강제로 설정합니다. 맵 이름을 대소문자 구분해서 토씨하나 틀림없이 정확히 입력해야 합니다. 맵 투표에 의해 덮어씌워질 수 있습니다.

### /listmaps
콘솔에 맵 목록을 출력합니다. 모든 맵이 출력되지 않는 문제점이 있어 본 명령어 대신 포럼 공지에 있는 [맵 리스트](http://rssgo.co.kr/web/index.php?mid=notice&document_srl=54799)의 활용을 권장합니다.

### /mapvote
다음 맵 투표를 강제로 시작합니다.

### /forcertv
다음 맵으로 강제로 변경합니다.

### /enablertv | /disablertv
맵 변경 투표를 활성화하거나 비활성화 합니다. 맵 변경 투표를 비활성화 한 후 다시 활성화 하게 되면 다음 맵 변경 투표까지의 쿨타임이 초기화 됩니다.

### /voteextend "number"
해당 횟수만큼 맵 변경 투표를 추가적으로 표시하며, 투표 결과에 따라 맵 시간을 자동으로 연장합니다.

### /nominate_addmap "mapname"
해당 맵을 맵 투표에 추천(nominate)합니다. 해당 맵이 추천 리스트에 없어도 강제로 추가하고 추천합니다. `mapname`은 정확한 맵 이름을 적어야 합니다.

### /nomlist
현재 추천(nominate)된 맵들의 목록을 확인할 수 있습니다.

### /nominate_removemap "mapname"
이미 추천(nominate)된 맵을 노미네이트 목록에서 제거할 수 있습니다. `mapname`은 반드시 정확한 맵 이름을 적어야 합니다.

### /rcon mce_extend "value"
현재 맵의 연장 가능 횟수를 설정합니다. 서버가 비정상종료 된 이후 복구할 때 사용할 수 있습니다.

### /extend "number"
입력한 숫자만큼 시간을 연장합니다. `/rcon mp_timelimit`처럼 시간 계산을 할 필요 없이 간편하게 원하는 시간만큼 맵 시간을 연장할 수 있습니다. 단위는 분 입니다.  
!!! warning
    RSS 서버 버그로 인해 남은 시간이 `0:00`으로 표시될 경우 6분 이상 연장하지 않으면 시간이 늘어나지 않습니다. 남은 시간이 `0:00`이 아니라면 상관하지 않아도 됩니다.

### 준비시간 설정
준비시간을 다음 명령어로 설정 가능합니다.

* `/rcon mp_warmup_start`: 준비시간을 강제로 시작합니다.
* `/rcon mp_warmuptime "value"`: 준비시간을 해당 값으로 설정합니다. 단위는 초 입니다. 만약 준비시간을 늘렸다면 준비시간이 끝나기 전 반드시 모든 플레이어를 죽여야 합니다(`/slay @all`).
* `/rcon mp_warmup_end`: 준비시간을 강제로 종료하고 라운드를 시작합니다.

### /rcon mp_timelimit "value"
해당 맵의 남은 시간을 해당 값으로 설정합니다. `value` 값이 명시되지 않았을 경우 현재 남은 시간을 표시합니다. 단위는 분 입니다.

### /rcon mp_restartgame 1
해당 맵을 재시작합니다. 몇몇 요소들의 경우 이전의 상태가 유지될 수 있습니다. 완벽한 리셋을 하고 싶다면 동일한 맵으로 맵을 변경하십시오.

### /pos "x" "y" "z"
해당 좌표로 이동합니다. 어드민룸을 찾는다면 `/adminroom`을 대신 사용하는 것이 좋을 것입니다.

### /adminroom
어드민룸으로 이동합니다.  
==어드민룸 이동이 필요하나 명령어가 작동하지 않는 맵이 있다면 Hestia를 호출하세요.==  

### /stage "value"
해당 챕터로 변경합니다. `value`는 `/stage`를 입력해서 나온 리스트에 있는 값들 중 하나를 사용하면 됩니다.  
==챕터 변경이 필요하나 명령어가 작동하지 않는 맵이 있다면 Hestia를 호출하세요.==
??? example "ze_tesv_skyrim_v5_6"
    기본적으로 이 맵은 `/stage` 명령어를 이용해 챕터를 변경할 수 있습니다. 하지만 ZM 모드로 변경하기 위해서는 다음 콘솔을 입력해야 합니다.

    > `sm_forceinput stage_5_brush enable;sm_forceinput stage_vote_brush disable`

### /setlevel "nickname" "value"
해당 플레이어의 레벨을 해당 값으로 설정합니다. 자기자신은 `@me`를 통해 지정할 수 있습니다.  
옛날 맵 지원을 위해 추가된 플러그인으로서, 킬 수를 기반으로 레벨 관리를 하는 맵에서 작동하지 않습니다.  

간혹 이 명령어가 작동하지 않는 맵이 있습니다. 이 경우 `/forceinput`을 이용해 레벨을 변경할 수 있습니다.
??? example "ze_ffxii_ridorana"
    `/forceinput "nickname" addoutput "OnUser4 Map_Level_Check:Add:1"`  
    예시)  
    * `/forceinput "Hestia" addoutput "OnUser4 Map_Level_Check:Add:1"`: Hestia의 아이템 레벨을 1 증가  
    * `/forceinput @all addoutput "OnUser4 Map_Level_Check:Add:2"`: 모든 플레이어의 아이템 레벨을 2 증가  

    `Add:` 뒤의 숫자를 변경해 레벨 증가량을 변경할 수 있습니다. (`Add:2`: 2레벨 증가)  
    아이템의 만렙은 인간은 2레벨, 좀비는 3레벨입니다.

??? example "ze_ffxii_paramina"
    `/forceinput "nickname" addoutput "targetname 1~5"`  
    예시)  
    * `/forceinput "Hestia" addoutput "targetname 3"`: Hestia의 아이템 레벨을 3레벨로 설정  
    * `/forceinput @all addoutput "targetname 5"`: 모든 플레이어의 아이템 레벨을 5레벨로 설정  

    `targetname` 뒤의 숫자를 변경해 레벨을 변경할 수 있습니다. 아이템 레벨은 5 까지입니다.

??? example "ze_ffvii_mako_reactor_v6"
    `/forceinput "nickname" addoutput "OnUser1 leveling_counter:Add:1"`  
    예시)  
    * `/forceinput "Hestia" addoutput "OnUser1 leveling_counter:Add:1"`: Hestia의 아이템 레벨을 1 증가  
    * `/forceinput @all addoutput "OnUser1 leveling_counter:Add:2"`: 모든 플레이어의 아이템 레벨을 2 증가  

    `Add:` 뒤의 숫자를 변경해 레벨 증가량을 변경할 수 있습니다. (`Add:2`: 2레벨 증가)  
    아이템의 만렙은 3레벨입니다.  

    만약 레벨 버그가 발생해 레벨을 수동으로 조절해야 할 경우, `Add` 대신 `SetValue`를 사용해 레벨을 직접적으로 설정할 수 있습니다.  
    `/forceinput "nickname" addoutput "OnUser1 leveling_counter:SetValue:1"`  
    예시)  
    * `/forceinput "Hestia" addoutput "OnUser1 leveling_counter:SetValue:2"`: Hestia의 아이템 레벨을 2레벨로 설정

??? example "ze_rizomata_va2"
    각 아이템 별 설정방법이 소이합니다.  
    * **윈드**  
      `/forceinput "nickname" addoutput "targetname windlv1"`: 윈드 1레벨  
      `/forceinput "nickname" addoutput "targetname windlv2"`: 윈드 2레벨  
      `/forceinput "nickname" addoutput "targetname windmaster"`: 윈드 3레벨  
    * **힐**  
      `/forceinput "nickname" addoutput "targetname heallv1"`: 힐 1레벨  
      `/forceinput "nickname" addoutput "targetname heallv2"`: 힐 2레벨  
      `/forceinput "nickname" addoutput "targetname healmaster"`: 힐 3레벨  
    * **워터**  
      `/forceinput "nickname" addoutput "targetname waterlv1"`: 워터 1레벨  
      `/forceinput "nickname" addoutput "targetname waterlv2"`: 워터 2레벨  
      `/forceinput "nickname" addoutput "targetname watermaster"`: 워터 3레벨  
    * **어스**  
      `/forceinput "nickname" addoutput "targetname earthlv1"`: 어스 1레벨  
      `/forceinput "nickname" addoutput "targetname earthlv2"`: 어스 2레벨  
      `/forceinput "nickname" addoutput "targetname earthmaster"`: 어스 3레벨  

### /noclip "nickname" { class="can-use-filter" }
해당 플레이어를 노클립(날아다님)+갓모드(무적) 상태로 설정합니다. 닉네임이 명시되지 않으면 적용되지 않습니다.  
!!! warning
    콘솔에서 입력하는 `noclip`은 `sv_cheats 1`이 설정되어 있어야 하므로 어드민을 제외한 플레이어는 사용할 수 없습니다.

### /vote "title" ["option1" "option2" "option3" "option4" "option5"]
해당 제목의 투표를 생성합니다. 투표 항목은 이어붙여 추가할 수 있습니다. 옵션을 지정하지 않을 경우, 자동으로 Yes / No 투표로 생성됩니다.  
생성 가능한 선택지는 최대 5가지입니다. 이를 넘어가는 선택지는 표시되지 않습니다.

### /cs
현재 맵의 세팅을 확인합니다.  
확인할 수 있는 세팅은 다음과 같습니다.

* 난이도 세팅 (이지 / 하프 / 노말)
* 고폭 넉백(페일네이드) 활성화 유무

!!! info
    일반 플레이어도 사용 가능한 명령어입니다. 관리의 편의성 때문에 어드민 명령어를 서술하는 장소임에도 서술했습니다.

### /forceez
해당 맵을 강제로 이지세팅(좀비 넉백 증가 등)으로 설정합니다.

### /forcedefault
해당 맵을 강제로 기본세팅(제일 어려움)으로 설정합니다.

### /forcehalf
해당 맵을 강제로 중간세팅(이지세팅과 기본세팅 사이)으로 설정합니다.

### /toggle_failnade
해당 맵에서의 고폭 넉백(페일네이드)를 활성화/비활성화 합니다.

### /toggle_bhop
버니합 가속 가능 여부를 결정합니다. `sv_enablebunnyhopping` 값을 변경합니다.

### /forceinput "classname/targetname" "input" ["parameter"]
상급자용 명령어입니다.  
`ent_fire`의 [사용법](https://developer.valvesoftware.com/wiki/Ent_fire)과 동일합니다.  
다만 `classname/targetname`에 `player`를 쓰려면, `/forceinputplayer`를 대신 쓰세요.

### /forceinputplayer "nickname" "input" ["parameter"] { class="can-use-filter" }
상급자용 명령어입니다.  
`ent_fire`의 [사용법](https://developer.valvesoftware.com/wiki/Ent_fire)과 동일하며 `classname/targetname`이 플레이어에 해당할 경우 이 명령어를 쓰면 됩니다.

<br><br>

## 서버 관리
### /rcon quit
서버를 종료합니다. 이후 별도로 설정된 스크립트에 의해 서버가 다시 켜지게 됩니다.  
오류로 인해 서버가 곧바로 다시 켜지지 않을 수 있습니다. 따라서 서버를 재시동하기 전에 Hestia나 영몽님에게 이야기 한 후 재시동 해야합니다.  
만약 두 사람 모두 응답이 없거나 본 명령어를 사용한 후 서버가 재시동 되지 않았다면 카카오톡에서 두 사람을 호출하면 됩니다.

### /warning "nickname"
해당 플레이어에게 경고를 합니다. 사용한 것을 본 적이 없습니다. (소스모드 기본 기능?)
영몽님 말씀으로는 사용하면 안된다고 합니다.  
**==사용 금지==**

### /gravity @all "value"
전체 플레이어에게 해당 중력값을 적용합니다. value의 범위는 `0.1 ~ 1.0`입니다.   
`sv_gravity`와 다른 방식으로 작동하는 플러그인입니다. `sv_gravity`는 800이 기본값입니다.

<br><br>

## 어드민 업무
### sm_jumps "userid"
오토버니가 의심되는 플레이어를 확인할 때 사용할 수 있습니다.
??? tip "오토버니 / 하이퍼스크롤 구별법"
    기본적으로 위 명령어를 사용하면 다음과 같은 결과가 나옵니다.  
    > Flagged: 1 || Perf: 0.999761 || Avg: 2.000001/320.138549 || [REDACTED] || Map: [REDACTED] || Last: 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2

    이 때 제일 먼저 확인해야 할 것은 `Flagged` 항목입니다. 이 항목이 `1`로 되어 있다면 핵이 확실함을 의미합니다.  
    두번째로 확인해야 할 것은 `Perf` 값입니다. 이 값이 `1`에 근접할 수록 핵일 확률이 높습니다.  
    세번째로 확인해야 할 것은 `Last` 값들입니다.

    `Last`가 `Perf` 값에 상관 없이 `20` 이상의 값이 연속될 경우 하이퍼스크롤로 의심할 수 있습니다.  
    `Perf`가 `1`에 근접했으며 `Last` 값이 일정한 패턴을 보인다면 오토버니로 의심할 수 있습니다.

### sm_rcon say "message"
서버가 해당 메세지를 말하게 합니다. 서버 메세지는 초록색으로 강조표시 됩니다.

### sm_psay "nickname" "message"
해당 플레이어에게 메세지를 보냅니다. 이때 message에 공백이 들어가서는 안됩니다. 이는 플러그인의 문제로서, 공백을 사용해야 한다면 `_`로 대체해서 사용하십시오.

### /msay "message"
모든 플레이어의 왼쪽 화면에 메시지를 표시합니다. 해당 메시지가 표시되는 동안 무기 교체가 불가능하게 되므로 사용에 유의하시기 바랍니다.

### /admins
현재 서버에 있는 어드민의 목록을 출력합니다.  
!!! info
    일반 플레이어도 사용 가능한 명령어입니다. 관리의 편의성 때문에 어드민 명령어를 서술하는 장소임에도 서술했습니다.

### /vip
어드민 전용. 본인의 크레딧을 9억으로 설정합니다.

### /iamwin "value"
본인의 VIP 티어를 설정합니다. 유효한 값은 1 ~ 3입니다.

### /win
이벤트 전용. 현재 생존한 인간(CT)에게 크레딧 5000을 지급합니다.

### /tgs "tagname"
해당 내용의 태그를 본인에게 적용합니다. 여전히 토큰이 필요합니다.  
!!! info
    태그를 사용 가능한 일반 플레이어도 사용 가능한 명령어입니다. 관리의 편의성 때문에 어드민 명령어를 서술하는 장소임에도 서술했습니다.

### /tgc
해당 색상을 태그에 적용합니다. 여전히 토큰이 필요합니다. 사용가능한 색상 리스트가 화면 왼쪽에 나타납니다.  
!!! info
    태그를 사용 가능한 일반 플레이어도 사용 가능한 명령어입니다. 관리의 편의성 때문에 어드민 명령어를 서술하는 장소임에도 서술했습니다.

### /currenthp
본인이 마지막으로 사격한 적(보스 포함)의 체력을 보여줍니다.  
사혹이나 모노리스 처럼 보스의 체력이 나타났다가 사라지거나, 아예 나타나지 않는 경우 다음 명령어로 다른 플러그인을 로드 한 후 사용할 수 있습니다. 해당 맵이 끝나면 해당 플러그인을 언로드 하십시오.

* `/rcon sm plugins load disabled/bhp`: bhp 플러그인을 로드합니다.
* `/rcon sm plugins unload disabled/bhp`: bhp 플러그인을 언로드합니다.

**==특수한 경우를 제외하고 사용 금지==**

### /subtracthp "value"
본인이 마지막으로 사격한 적(보스 포함)의 체력을 해당 값만큼 감산합니다.  
사혹이나 모노리스 처럼 보스의 체력이 나타났다가 사라지거나, 아예 나타나지 않는 경우 다음 명령어로 다른 플러그인을 로드 한 후 사용할 수 있습니다. 해당 맵이 끝나면 해당 플러그인을 언로드 하십시오.

* `/rcon sm plugins load disabled/bhp`: bhp 플러그인을 로드합니다.
* `/rcon sm plugins unload disabled/bhp`: bhp 플러그인을 언로드합니다.

**==특수한 경우를 제외하고 사용 금지==**

### /rcon sm plugins unload mydmgfix
칼 데미지가 고장났을 때 사용하십시오. 한번 언로드하고 다시 로드하면 됩니다(`/rcon sm plugins load mydmgfix`)

### /rcon sm plugins unload zr_repeatkill
CHECKING ZOMBIES 관련 문제가 발생했을 때 사용하십시오. CHECKING ZOMBIES(체킹좀비) 과정을 비활성화 합니다. 문제가 해결되면 다시 플러그인을 로드하면 됩니다.  
!!! tip
    모든 좀비 부활이 필요하다면 `/zr_zspawn_force @all 1`을 사용하세요.

### /rcon stripper_dump
맵 버그가 발생했고 스트리퍼로 해결 가능할 것으로 보인다면 해당 명령어를 써서 나온 결과물을 Hestia에게 버그 내용과 함께 알려주십시오. 스트리퍼 덤프 파일이 서버에만 저장되기 때문에, 명령어를 입력해도 결과를 볼 수 없습니다.

### /rcon sv_airaccelerate "value"
공기저항 값을 변경합니다. 서버가 튕기는 등의 문제가 생길 수 있으므로 사용에 최대한 유의하십시오.

### /rcon zr_heprice "value"
HE 수류탄의 값을 변경합니다. 해당 값은 라운드가 종료되면 자동적으로 5000으로 되돌아갑니다.  
**==사용 불가==** (별도 플러그인 활성화 필요)

### /rcon sm plugins unload sv_bhop
`sv_enablebunnyhopping` 값을 자동으로 0으로 설정하는 플러그인을 비활성화합니다. 해당 명령어는 가속버니를 제한합니다.  
이 명령어를 사용 후 `/rcon sv_enablebunnyhopping 0`을 설정해야 가속버니를 제한할 수 있습니다.

[^1]: ZE서버의 명령어 중 일부는 MG서버에서도 사용 가능합니다.
[^2]: 파라미나 맵 테스트용으로 만든 플러그인이라서 명령어 이름이 para입니다.