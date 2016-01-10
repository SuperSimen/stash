function! Map(Fun, list)
    if len(a:list) == 0
        return []
    else
        return Map(a:Fun, a:list[1:]) + [a:Fun(a:list[0])]
    endif
endfunction
    
function! Echo(value)
    echo a:value
endfunction

function! TimesTwo(value)
    return a:value*2
endfunction
