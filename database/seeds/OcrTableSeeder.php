<?php

use Illuminate\Database\Seeder;

class OcrTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('ocrs')->delete();

        factory(App\Ocr::class,20)->create();
    }
}
