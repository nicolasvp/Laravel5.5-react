@extends('layouts.master')

@section('css')
<style type="text/css">
	#page-numbers {
	  list-style: none;
	  display: flex;
	}

	#page-numbers > li {
	  margin-right: 0.3em;
	  color: blue;
	  user-select: none;
	  cursor: pointer;
	}
</style>
@endsection

@section('content')
<div id="root-react">

</div>
@endsection