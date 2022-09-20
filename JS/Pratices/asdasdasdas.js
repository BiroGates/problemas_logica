function order(first,second, third){
    if(first > second){
        let swap = first;
        first = second;
        second = swap;
    }else if(first > third){
        let swap = first;
        first = third;
        third = swap;
    }else if(second > third){
        let swap = second;
        second = third;
        third = swap;
    }
}
order(-1,1,0);
