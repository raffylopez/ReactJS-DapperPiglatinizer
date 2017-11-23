let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/webprojects_local/react/mead/react-course-boilerplate-app
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +5 ~/vimrc_deps/custom-keybindings.vimrc
badd +8 app/redux-playground/combined-reducers.jsx
badd +56 app/redux-test.jsx
badd +1 app/redux-playground
badd +2489 ~/.vimrc
badd +1 \[quickrun\ output]
badd +11 app/redux-playground/where-am-i.jsx
badd +188 ~/.vim/UltiSnips/javascript.snippets
badd +1 ~/webprojects_local/react/mead/react-course-boilerplate-app
badd +44 app/tests/components/TodoList.test.jsx
badd +7 app/components/TodoList.jsx
badd +87 app/components/TodoApp.jsx
badd +11 app/components/AddTodo.jsx
badd +2 ~/vimrc_deps/vundle-devprofile-html.vimrc
badd +17 server.js
badd +14 package.json
badd +20 app/components/Todo.jsx
badd +37 TodoApp.test.jsx
badd +32 app/components/Nav.jsx
badd +26 app/components/Main.jsx
badd +782 ~/vimrc_deps/rdl-funcs.vimrc
badd +34 app/api/TodoAPI.jsx
badd +26 webpack.config.js.PREV
badd +20 app/app.jsx
badd +15 app/components/SimpleTest.jsx
badd +19 ~/notes/tobuy.md
badd +21 ~/vimtmp/backups/Nav.jsx~
badd +1 ~/vimrc_deps
badd +1 ~/vimrc_deps/inactive-settings.vimrc
badd +14 ~/vimrc_deps/vundle-standard.vimrc
badd +422 ~/vimrc_deps/nursery.vimrc
badd +696 ~/vimrc_deps/monkeyjump.vimrc
badd +25 app/components/PcConfigurator.jsx
badd +148 ~/._sharedrc
badd +2 .gitignore
badd +17 app/components/PcConfiguratorDynaList.jsx
badd +2 __Scratch__
badd +4 server2.js
badd +10 server3.js
badd +1 public
badd +34 ~/webprojects_local/jquery/jquery_one/index.html
badd +12 public/index.html
badd +40 webpack.config.js
argglobal
silent! argdel *
argadd ~/webprojects_local/react/mead/react-course-boilerplate-app
edit app/app.jsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 79 + 80) / 160)
exe 'vert 2resize ' . ((&columns * 80 + 80) / 160)
argglobal
setlocal fdm=marker
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 10 - ((9 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 0
lcd ~/webprojects_local/react/mead/react-course-boilerplate-app
wincmd w
argglobal
edit ~/webprojects_local/react/mead/react-course-boilerplate-app/\[quickrun\ output]
setlocal fdm=marker
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/webprojects_local/react/mead/react-course-boilerplate-app
wincmd w
exe 'vert 1resize ' . ((&columns * 79 + 80) / 160)
exe 'vert 2resize ' . ((&columns * 80 + 80) / 160)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOAc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
let g:this_obsession_status = 2
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
